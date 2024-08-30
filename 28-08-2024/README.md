Task 1: Using of or operator

Solution:
We checked if the age is greater than or equal to 18 or marks is greater than or equal or 80.
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
In this condition operator returns all documents that fail to match both conditions. In other words, it returns documents where neither Age >= 22 nor Marks >= 80 is true.
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
 It's commonly used to find documents that do not match a specific condition.It will return documents whose age is not greater than or equal to 20.
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