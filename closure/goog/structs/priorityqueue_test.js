// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('goog.structs.PriorityQueueTest');
goog.setTestOnly('goog.structs.PriorityQueueTest');

goog.require('goog.structs');
goog.require('goog.structs.PriorityQueue');
goog.require('goog.testing.jsunit');

function getPriorityQueue() {
  var p = new goog.structs.PriorityQueue();
  p.enqueue(0, 'a');
  p.enqueue(1, 'b');
  p.enqueue(2, 'c');
  p.enqueue(3, 'd');
  return p;
}


function getPriorityQueue2() {
  var p = new goog.structs.PriorityQueue();
  p.insert(1, 'b');
  p.insert(3, 'd');
  p.insert(0, 'a');
  p.insert(2, 'c');
  return p;
}


function testGetCount1() {
  var p = getPriorityQueue();
  assertEquals('count, should be 4', p.getCount(), 4);
  p.dequeue();
  assertEquals('count, should be 3', p.getCount(), 3);
}


function testGetCount2() {
  var p = getPriorityQueue();
  assertEquals('count, should be 4', p.getCount(), 4);
  p.dequeue();
  assertEquals('count, should be 3', p.getCount(), 3);
}


function testGetCount3() {
  var p = getPriorityQueue();
  p.dequeue();
  p.dequeue();
  p.dequeue();
  p.dequeue();
  assertEquals('count, should be 0', p.getCount(), 0);
}


function testKeys() {
  var p = getPriorityQueue();
  var keys = p.getKeys();
  for (var i = 0; i < 4; i++) {
    assertTrue('getKeys, key ' + i + ' found', goog.structs.contains(keys, i));
  }
  assertEquals('getKeys, Should be 4 keys', goog.structs.getCount(keys), 4);
}


function testValues() {
  var p = getPriorityQueue();
  var values = p.getValues();

  assertTrue('getKeys, value "a" found', goog.structs.contains(values, 'a'));
  assertTrue('getKeys, value "b" found', goog.structs.contains(values, 'b'));
  assertTrue('getKeys, value "c" found', goog.structs.contains(values, 'c'));
  assertTrue('getKeys, value "d" found', goog.structs.contains(values, 'd'));
  assertEquals('getKeys, Should be 4 keys', goog.structs.getCount(values), 4);
}


function testClear() {
  var p = getPriorityQueue();
  p.clear();
  assertTrue('cleared so it should be empty', p.isEmpty());
}


function testIsEmpty() {
  var p = getPriorityQueue();
  assertFalse('4 values so should not be empty', p.isEmpty());

  p.dequeue();
  p.dequeue();
  p.dequeue();
  assertFalse('1 values so should not be empty', p.isEmpty());

  p.dequeue();
  assertTrue('0 values so should be empty', p.isEmpty());
}


function testPeek1() {
  var p = getPriorityQueue();
  assertEquals('peek, Should be "a"', p.peek(), 'a');
}


function testPeek2() {
  var p = getPriorityQueue2();
  assertEquals('peek, Should be "a"', p.peek(), 'a');
}


function testPeek3() {
  var p = getPriorityQueue();
  p.clear();
  assertEquals('peek, Should be "a"', p.peek(), undefined);
}


function testDequeue1() {
  var p = getPriorityQueue();

  assertEquals('dequeue, Should be "a"', p.dequeue(), 'a');
  assertEquals('dequeue, Should be "b"', p.dequeue(), 'b');
  assertEquals('dequeue, Should be "c"', p.dequeue(), 'c');
  assertEquals('dequeue, Should be "d"', p.dequeue(), 'd');
}


function testDequeue2() {
  var p = getPriorityQueue2();

  assertEquals('dequeue, Should be "a"', p.dequeue(), 'a');
  assertEquals('dequeue, Should be "b"', p.dequeue(), 'b');
  assertEquals('dequeue, Should be "c"', p.dequeue(), 'c');
  assertEquals('dequeue, Should be "d"', p.dequeue(), 'd');
}


function testEnqueuePeek1() {
  var p = new goog.structs.PriorityQueue();

  p.enqueue(3, 'd');
  assertEquals('peak, Should be "d"', p.peek(), 'd');
  p.enqueue(2, 'c');
  assertEquals('peak, Should be "c"', p.peek(), 'c');
  p.enqueue(1, 'b');
  assertEquals('peak, Should be "b"', p.peek(), 'b');
  p.enqueue(0, 'a');
  assertEquals('peak, Should be "a"', p.peek(), 'a');
}


function testEnqueuePeek2() {
  var p = new goog.structs.PriorityQueue();

  p.enqueue(1, 'b');
  assertEquals('peak, Should be "b"', p.peek(), 'b');
  p.enqueue(3, 'd');
  assertEquals('peak, Should be "b"', p.peek(), 'b');
  p.enqueue(0, 'a');
  assertEquals('peak, Should be "a"', p.peek(), 'a');
  p.enqueue(2, 'c');
  assertEquals('peak, Should be "a"', p.peek(), 'a');
}
