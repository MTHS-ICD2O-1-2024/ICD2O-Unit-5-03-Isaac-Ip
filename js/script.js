// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function selects a random number depending on the user's choice.
 */
function findMovieType () {

  // input
  const age = parseInt(document.getElementById('age').value)

  // process
  if (age >= 17) {
    // output
    document.getElementById('result').innerHTML = 'You can watch an R movie alone.'

  } else if (age >= 13) {
    // output
    document.getElementById('result').innerHTML = 'You can watch a PG-13 movie alone.'

  } else if (age >= 5) {
    // output
    document.getElementById('result').innerHTML = 'You can watch a G or PG movie alone.'

  } else {
    // output
    document.getElementById('result').innerHTML = 'You are too young to watch movies.'
  }
  // Thank you message
  document.getElementById('thank-you-message').innerHTML = 'Thank you for verifying your age.'
}
