Microsoft Windows [Version 10.0.22621.4037]
(c) Microsoft Corporation. All rights reserved.

C:\Users\lenovo>mongosh
Current Mongosh Log ID: 66cff9375236233dd02710bb
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
Using MongoDB:          7.0.14
Using Mongosh:          2.3.0

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-08-28T10:05:12.170+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use admin
switched to db admin
admin> db.createCollection("Name")
{ ok: 1 }
admin> show dbs
admin    48.00 KiB
config  108.00 KiB
local    40.00 KiB
admin> show collections
Name
system.version
admin> db.name.insertOne({date:IS0Date()});
ReferenceError: IS0Date is not defined
admin> db.name.insertOne({date:ISoDate()});
ReferenceError: ISoDate is not defined
admin> db.collection_name.insertOne({date:ISODate()});
{
  acknowledged: true,
  insertedId: ObjectId('66cffcbf5236233dd02710bc')
}
admin> db.collection_name.insertMAny([{id:1,Name:"Akshit"},{id:2,Name:"Akshit"},{id:3,Name:"Akshit"}]);
TypeError: db.collection_name.insertMAny is not a function
admin> db.collection_name.insertMany([{id:1,Name:"Akshit"},{id:2,Name:"Akshit"},{id:3,Name:"Akshit"}]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66cfff9e5236233dd02710bd'),
    '1': ObjectId('66cfff9e5236233dd02710be'),
    '2': ObjectId('66cfff9e5236233dd02710bf')
  }
}
admin> db.collection_name.findOne({id:1});
{ _id: ObjectId('66cfff9e5236233dd02710bd'), id: 1, Name: 'Akshit' }
admin> db.collection_name.find()
[
  {
    _id: ObjectId('66cffcbf5236233dd02710bc'),
    date: ISODate('2024-08-29T04:44:47.294Z')
  },
  { _id: ObjectId('66cfff9e5236233dd02710bd'), id: 1, Name: 'Akshit' },
  { _id: ObjectId('66cfff9e5236233dd02710be'), id: 2, Name: 'Akshit' },
  { _id: ObjectId('66cfff9e5236233dd02710bf'), id: 3, Name: 'Akshit' }
]
admin> db.collection_name.findOne({Name});
ReferenceError: Name is not defined
admin> db.collection_name.findOne({Name:"Akshit"});
{ _id: ObjectId('66cfff9e5236233dd02710bd'), id: 1, Name: 'Akshit' }
admin> db.collection_name.countDocuments();
4
admin> db.collection_name.estimatedDocumentCount();
4
admin> db.collection_name.countDocuments(id:1);
Uncaught:
SyntaxError: Unexpected token, expected "," (1:36)

> 1 | db.collection_name.countDocuments(id:1);
    |                                     ^
  2 |

admin> db.collection_name.countDocuments({id:1});
1
admin> db.collection_name.estimatedDocumentCount();
4
admin>  db.createCollection("Student")
{ ok: 1 }
admin> db.student.insertMany([{Name:"Akshit",Age:20,Subject:"CSE"},{Name:"Harkaran",Age:21,Subject:"Math"},{Name:"Gursahaj",Age:19,Subject:"Science"}]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d14ab95236233dd02710c0'),
    '1': ObjectId('66d14ab95236233dd02710c1'),
    '2': ObjectId('66d14ab95236233dd02710c2')
  }
}
admin> db.student.update({Subject:"CSE"});
DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
MongoshInvalidInputError: [COMMON-10001] Missing required argument at position 1 (Collection.update)
admin> db.student.updateMany({Subject:"CSE"});
MongoInvalidArgumentError: Update document requires atomic operators
admin> db.student.updateMany({},{$set:Subject:"CSE"}})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:38)

> 1 | db.student.updateMany({},{$set:Subject:"CSE"}})
    |                                       ^
  2 |

admin> db.student.updateMany({},{$set:{Subject:"CSE"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 2,
  upsertedCount: 0
}
admin> db.student.updateMany({},{$set:{address:"Chitkara University"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
admin> db.showCollections()
TypeError: db.showCollections is not a function
admin> db.showCollections();
TypeError: db.showCollections is not a function
admin> db.student.updateOne({studentName:"Akshit"},{$set:{Grade:"A"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
admin> db.student.updateOne({Name:"Akshit"},{$set:{Grade:"A"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
admin> db.student.updateOne({Name:"Harkaran"},{$set:{Grade:"B"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
admin> db.student.updateOne({Name:"Gursahaj"},{$set:{Grade:"A"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
admin> db.student.updateOne({Name:"Gursahaj"},{$set:{Grade:"A+"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
admin> db.student.updateOne({Name:"Akshit"},{$set:{Marks:90}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
admin> db.student.updateOne({Name:"Harkaran"},{$set:{MArks:85}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
admin> db.student.updateOne({Name:"Gursahaj"},{$set:{Marks:98}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
admin> db.student.updateOne({Name:"Akshit"},{$set:{Age:22}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
admin> db.student.find({Age:22 && Marks:90})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:32)

> 1 | db.student.find({Age:22 && Marks:90})
    |                                 ^
  2 |

admin> db.student.find({Age:22} && {Marks:90})
[
  {
    _id: ObjectId('66d14ab95236233dd02710c0'),
    Name: 'Akshit',
    Age: 22,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'A',
    Marks: 90
  }
]
admin> db.student.find({Age<=18} && {Marks<=80})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:20)

> 1 | db.student.find({Age<=18} && {Marks<=80})
    |                     ^
  2 |

admin> db.student.find({Age: {gte:18} && {Marks: {gte:80})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:50)

> 1 | db.student.find({Age: {gte:18} && {Marks: {gte:80})
    |                                                   ^
  2 |

admin> db.student.find([{Age: {gte:18} && {Marks: {gte:80}])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:51)

> 1 | db.student.find([{Age: {gte:18} && {Marks: {gte:80}])
    |                                                    ^
  2 |

admin> db.student.find([{Age: {gte:18}}, && {Marks: {gte:80}}])
Uncaught:
SyntaxError: Unexpected token (1:34)

> 1 | db.student.find([{Age: {gte:18}}, && {Marks: {gte:80}}])
    |                                   ^
  2 |

admin> db.student.find([{Age: {gte:18}},{Marks: {gte:80}}])
MongoInvalidArgumentError: Query filter must be a plain object or ObjectId
admin> db.student.find({$and:[{Age: {gte:18}},{Marks: {gte:80}}])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:57)

> 1 | db.student.find({$and:[{Age: {gte:18}},{Marks: {gte:80}}])
    |                                                          ^
  2 |

admin> db.student.find({$and:[{Age: {$gte:18}},{Marks: {$gte:80}}])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:59)

> 1 | db.student.find({$and:[{Age: {$gte:18}},{Marks: {$gte:80}}])
    |                                                            ^
  2 |

admin> db.student.find({$and:[{Age: {$gte:18} } ,{Marks: {$gte:80}]})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:59)

> 1 | db.student.find({$and:[{Age: {$gte:18} } ,{Marks: {$gte:80}]})
    |                                                            ^
  2 |

admin> db.student.find({Age: {$gte:18} , Marks: {$gte:80}})
[
  {
    _id: ObjectId('66d14ab95236233dd02710c0'),
    Name: 'Akshit',
    Age: 22,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'A',
    Marks: 90
  },
  {
    _id: ObjectId('66d14ab95236233dd02710c2'),
    Name: 'Gursahaj',
    Age: 19,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'A+',
    Marks: 98
  }
]
admin> db.student.find({Grade:"A+"})
[
  {
    _id: ObjectId('66d14ab95236233dd02710c2'),
    Name: 'Gursahaj',
    Age: 19,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'A+',
    Marks: 98
  }
]
admin> db.student.find({$or:[{Age: {$gte:18} } ,{ Marks: {$gte:80}})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:60)

> 1 | db.student.find({$or:[{Age: {$gte:18} } ,{ Marks: {$gte:80}})
    |                                                             ^
  2 |

admin> db.student.find({$or:[{Age: {$gte:18} } { Marks: {$gte:80}})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:40)

> 1 | db.student.find({$or:[{Age: {$gte:18} } { Marks: {$gte:80}})
    |                                         ^
  2 |

admin> db.student.find({$or:[{Age: {$gte:18} } , { Marks: {$gte:80}}]})
[
  {
    _id: ObjectId('66d14ab95236233dd02710c0'),
    Name: 'Akshit',
    Age: 22,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'A',
    Marks: 90
  },
  {
    _id: ObjectId('66d14ab95236233dd02710c1'),
    Name: 'Harkaran',
    Age: 21,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'B',
    MArks: 85
  },
  {
    _id: ObjectId('66d14ab95236233dd02710c2'),
    Name: 'Gursahaj',
    Age: 19,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'A+',
    Marks: 98
  }
]
admin> db.student.find({$or:[{Age: {$gte:22} } , { Marks: {$gte:80}}]})
[
  {
    _id: ObjectId('66d14ab95236233dd02710c0'),
    Name: 'Akshit',
    Age: 22,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'A',
    Marks: 90
  },
  {
    _id: ObjectId('66d14ab95236233dd02710c2'),
    Name: 'Gursahaj',
    Age: 19,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'A+',
    Marks: 98
  }
]
admin> db.student.find({$nor:[{Age: {$gte:22} } , { Marks: {$gte:80}}]})
[
  {
    _id: ObjectId('66d14ab95236233dd02710c1'),
    Name: 'Harkaran',
    Age: 21,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'B',
    MArks: 85
  }
]
admin> db.student.find({$not:[{Age: {$gte:22} } , { Marks: {$gte:80}}]})
MongoServerError[BadValue]: unknown top level operator: $not. If you are trying to negate an entire expression, use $nor.
admin> db.student.find({$not:[{Age: {$gte:20} } , { Marks: {$gte:80}}]})
MongoServerError[BadValue]: unknown top level operator: $not. If you are trying to negate an entire expression, use $nor.
admin> db.student.find({$not:[{Age: {$gte:20} } , { Marks: {$gte:90}}]})
MongoServerError[BadValue]: unknown top level operator: $not. If you are trying to negate an entire expression, use $nor.
admin> db.student.find({$not:{Age: {$gte:20}}})
MongoServerError[BadValue]: unknown top level operator: $not. If you are trying to negate an entire expression, use $nor.
admin> db.student.find({$not:{Age:20}})
MongoServerError[BadValue]: unknown top level operator: $not. If you are trying to negate an entire expression, use $nor.
admin> db.student.find({Age:{$not:20}})
MongoServerError[BadValue]: $not needs a regex or a document
admin> db.student.find({Age:{$not:{gte:20}}})
MongoServerError[BadValue]: unknown operator: gte
admin> db.student.find({Age:{$not:{$gte:20}}})
[
  {
    _id: ObjectId('66d14ab95236233dd02710c2'),
    Name: 'Gursahaj',
    Age: 19,
    Subject: 'CSE',
    address: 'Chitkara University',
    Grade: 'A+',
    Marks: 98
  }
]
admin>