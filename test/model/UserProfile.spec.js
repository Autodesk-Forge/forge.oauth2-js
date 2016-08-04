/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ForgeOauth2);
  }
}(this, function(expect, ForgeOauth2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ForgeOauth2.UserProfile();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserProfile', function() {
    it('should create an instance of UserProfile', function() {
      // uncomment below and update the code to test UserProfile
      //var instane = new ForgeOauth2.UserProfile();
      //expect(instance).to.be.a(ForgeOauth2.UserProfile);
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ForgeOauth2.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new ForgeOauth2.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property emailId (base name: "emailId")', function() {
      // uncomment below and update the code to test the property emailId
      //var instane = new ForgeOauth2.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new ForgeOauth2.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new ForgeOauth2.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property emailVerified (base name: "emailVerified")', function() {
      // uncomment below and update the code to test the property emailVerified
      //var instane = new ForgeOauth2.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property _2FaEnabled (base name: "2FaEnabled")', function() {
      // uncomment below and update the code to test the property _2FaEnabled
      //var instane = new ForgeOauth2.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property profileImages (base name: "profileImages")', function() {
      // uncomment below and update the code to test the property profileImages
      //var instane = new ForgeOauth2.UserProfile();
      //expect(instance).to.be();
    });

  });

}));
