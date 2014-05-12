if (Meteor.isClient) {

  Apps = new Meteor.Collection("applications", {
    schema: {
     firstName: {
      type: String,
      max: 30,
      regEx: /^[a-zA-Z-]{2,30}$/
     },
     lastName: {
      type: String,
      max: 30,
      regEx: /^[a-zA-Z-]{2,30}$/
     },
     email: {
      type: String,
      max: 200,
      regEx: SimpleSchema.RegEx.Email
     },
     phoneNumber: {
      type: Number,
      regEx: /^[0-9]{10}$/
     },
     address: {
      type: AddressSchema
     },
     nationOfCitizenship: {
      type: String,
      max: 100
     },
     race: {
      type: String
     },
     nativeLanguage: {
      type: String,
      max: 100
     },
     religion: {
      type: String,
      max: 100
     },
     gender: {
      type: String,
      max: 6
     },
     highSchool: {
      type: highSchoolSchema
     },
     grades: {
      type: [gradesSchema]
     },
     dateOfExpectedGraduation: {
      type: Date,
     },
     guidanceCounselorFirstName: {
      type: String,
      max: 40
     }, 
     guidanceCounselorLastName: {
      type: String,
      max: 40
     },
     guidanceCounselorEmail: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
     },
     counselorContactApproval: {
      type: boolean
     },
     veteranStatus: {
      type: boolean
     },
     activities: {
      type: [activitySchema]
     },
     honors: {
      type: [honorSchema]
     },
     ACT: {
      type: [testSchema]
     },
     SAT: {
      type: [testSchema]
     },
     AP_IB_SATSUBJECTS: {
      type: [testSchema]
     }

  }});

activitySchema = new SimpleSchema({
  activityType: {
    type: String
  },
  description: {
    type: String,
    max: 200
  },
  durationInYears: {
    type: Number,
    max 1
  }
});

// flesh out these standardized test score schemas 
testScoreSchema = new SimpleSchema({
  testName: {
    type: String
  },
  testDate: {
    type: Date
  },
  testScore: {
    type: Number,
  }
});

testSchema = new SimpleSchema({
  dte: {
  type: Date
 },
  ag: {
  type: String
  ,
 score: {
  type: Number
  }
});


gradesSchema = new SimpleSchema({
  rank: {
   type: Number
  },
  classSize: {
   type: Number
  },
  gpaWeighted: {
   type: boolean
  },
  gpaScale: {
   type: Number
  },
  GPA: {
   type: Number
  }
});

collegeSchema = new SimpleSchema({
  collegeName: {
    type: String,
    max: 200
  },
  topChoice: {
    type: boolean
  },
  earlyApplication: {
    type: boolean
  },
  legacy: {
    type: boolean
  },
  athleticRecruit: {
    type: boolean
  }

});


highSchoolSchema = new SimpleSchema({
  name: {
    type: String,
    max: 200
  },
  CEEBCode: {
    type: Number,
    max: 6
  },
  address: {
    type: AddressSchema
  },
  phoneNumber: {
    type: Number,
    regEx: /^[0-9]{10}$/
  }
});

AddressSchema = new SimpleSchema({
  street: {
    type: String,
    max: 100
  },
  city: {
    type: String,
    max: 50
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
  },
  country: {
    type: String,
    max: 40
  }
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/
  }
});

longEssaySchema = new SimpleSchema({
  essayType: {
    type: String 
  },
  plainText: {
    type: String
    regEx: /\S+\s*{600}$/g // this may need modification.  It looks for one or more non-whitespace characters followed by zero or more whitespace chacaters and ensures newline characte ar ine included in whitespace count
  }
})


honorSchema = new SimpleSchema({
  description: {
    type: String,
    max: 200
  },
  durationInYears: {
    type: Number,
    max 1
  },
  levelOfRecognition: {
    type: String,
    max: 3
  }
});


}