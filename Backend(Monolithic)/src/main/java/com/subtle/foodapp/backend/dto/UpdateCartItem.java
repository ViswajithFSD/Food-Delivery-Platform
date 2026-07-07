package com.subtle.foodapp.backend.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

import lombok.Data;

@Data
public class UpdateCartItem {

    @NotNull
    @Min(1)
    private Integer quantity;
}