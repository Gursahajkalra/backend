Task 1: Using of or operator

Solution:
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

Task 2:Using of Nor operator

solution:
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

Task 3:Using of not operator

Solution:
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