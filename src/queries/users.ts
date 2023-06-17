export const getUsers = () => `
{
  userMen {
    id
    createdAt
    publishedAt
    updatedAt
    calLeftBreakfast {
      text
    }
    calLimitMeal {
      text
    }
    calLimitDinner {
      text
    }
    calLimitBreakfast {
      text
    }
    calLeftMeal {
      text
    }
    calLeftDinner {
      text
    }
    name {
      text
    }
  }
}
`;