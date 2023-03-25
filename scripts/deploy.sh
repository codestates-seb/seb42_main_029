#!/bin/bash
# 빌드 파일의 이름이 콘텐츠와 다르다면 다음 줄의 .jar 파일 이름을 수정하시기 바랍니다.
BUILD_JAR=$(ls /home/ubuntu/deploy-b/build/libs/modudogcat-0.0.1-SNAPSHOT.jar)
JAR_NAME=$(basename $BUILD_JAR)

# shellcheck disable=SC2129
echo "> 현재 시간: $(date)" >> /home/ubuntu/deploy-b/deploy.log

echo "> build 파일명: $JAR_NAME" >> /home/ubuntu/deploy-b/deploy.log

echo "> build 파일 복사" >> /home/ubuntu/deploy-b/deploy.log
DEPLOY_PATH=/home/ubuntu/deploy-b/
cp $BUILD_JAR $DEPLOY_PATH

echo "> 현재 실행중인 애플리케이션 pid 확인" >> /home/ubuntu/deploy-b/deploy.log
CURRENT_PID=$(pgrep -f $JAR_NAME)

echo "> 현재 실행중인 애플리케이션 pid: $CURRENT_PID" >> /home/ubuntu/deploy-b/deploy.log

if [ -z $CURRENT_PID ]
then
  echo "> 현재 구동중인 애플리케이션이 없으므로 종료하지 않습니다." >> /home/ubuntu/deploy-b/deploy.log
else
  echo "> kill -9 $CURRENT_PID" >> /home/ubuntu/deploy-b/deploy.log
  sudo kill -9 $CURRENT_PID
  sleep 5
fi

echo "> $JAR_NAME 실행 권한 추가" >> /home/ubuntu/deploy-b/deploy.log

DEPLOYBUILD_PATH=/home/ubuntu/deploy-b/build/libs/

echo "> DEPLOY_JAR 배포"    >> /home/ubuntu/deploy-b/deploy.log
# shellcheck disable=SC2024
sudo -E nohup java -jar -Dspring.profiles.active=server $DEPLOYBUILD_PATH$JAR_NAME >> /home/ubuntu/deploy.log 2> /home/ubuntu/deploy-b/deploy_err.log &