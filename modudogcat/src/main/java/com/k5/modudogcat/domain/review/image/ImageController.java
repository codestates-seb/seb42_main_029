package com.k5.modudogcat.domain.review.image;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ImageController {
    private final ImageService imageService;

    @GetMapping("/images/{image-id}")
    public ResponseEntity<byte[]> getImage(@PathVariable("image-id") Long imageId){
        Image image = imageService.findImage(imageId);
        byte[] imageByteArray = image.getImage();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);

        return new ResponseEntity<byte[]>(imageByteArray,headers, HttpStatus.OK);
    }

}
