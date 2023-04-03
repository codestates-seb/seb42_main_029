import React from 'react';
const val = [
  {id: 0, title: ''}
];

const [checkItems, setCheckItems] = useState([]);

// 체크박스 단일선택
const handleSingleCheck = (checked, id) => {
  if(checked){
    setCheckItems(prev => [...prev, id]);
  }
  else{
    setCheckItems(checkItems.filter((el) => el !== id));
  }
}

<input type='checkbox' name='select-all' onChange={(e) => handleAllCheck(e.target.checked)}
// 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
checked={checkItems.length === val.length ? true : false} />

const SingleCheck = () => {
  return (
    <div>
      
    </div>
  );
};

export default SingleCheck;
