package com.k5.modudogcat.domain.anwser.controller;

import com.k5.modudogcat.domain.anwser.dto.AnswerDto;
import com.k5.modudogcat.dto.MultiResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/sellers/answers")
@AllArgsConstructor
public class AnswerController {

    @PostMapping
    public ResponseEntity postAnswer (@RequestBody AnswerDto.Post post) {

        return ResponseEntity.created(URI.create("/sellers/answers/1")).build();
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity<AnswerDto.Response> getAnswer (@PathVariable("answer-id") @Positive Long answerId) {

        AnswerDto.Response response = new AnswerDto.Response(answerId, "답변입니다.");

        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @GetMapping
    public ResponseEntity getAnswers(Pageable pageable) {

        List<AnswerDto.Response> getAnswers = List.of(
                new AnswerDto.Response(1L, "답변입니다.1"),
                new AnswerDto.Response(2L, "답변입니다.2"),
                new AnswerDto.Response(3L, "답변입니다.3")
        );

        Page<AnswerDto.Response> pageAnswers = new PageImpl<>(getAnswers, pageable, 3);
        List<AnswerDto.Response> responseList = pageAnswers.getContent();

        return new ResponseEntity(new MultiResponseDto<>(responseList, pageAnswers), HttpStatus.OK);


    }

}
