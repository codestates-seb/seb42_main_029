package com.k5.modudogcat.domain.review.entity.reviewImage;

import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;

    public Image findImage(Long imageId){
        Optional<Image> optionalImage = imageRepository.findById(imageId);
        Image findImage = optionalImage.orElseThrow(() -> {
            throw new BusinessLogicException(ExceptionCode.IMAGE_NOT_FOUND);
        });
        return findImage;
    }
}
