'use strict';
const {assert:{equal, notEqual, isFunction, isNumber}} = require('chai');
//require in methods to use for testing

let add = require('../lib/add.js');
//require in module function for testing

describe('add file', ()=>{
    describe('add', () => {
        it('should be a function', () => {
        isFunction(add);
        });
    });
    describe('add', ()=>{
        it('should return a number', ()=>{
            // console.log(typeof add(1,3));
            isNumber(add(1,3));
        });
    });
    describe('add 2 string numbers', ()=>{
        it('handles bad user numeric string input without breaking', ()=>{
            isNumber(add('1', '2'));
        });
    });
    describe('add 2 word strings', ()=>{
        it('handles bad user string input without breaking', ()=>{
            isNumber(add("monkey", "chicken"));
        });
    });
    describe('add 2 negative numbers', ()=>{
        isNumber(add(-4, -3));
    })
    describe('add 2 decimal values', ()=>{
        isNumber(add(.5, .4));
    })
    describe ('user puts in no numbers at all', ()=>{
        isNumber(add());
    })
});