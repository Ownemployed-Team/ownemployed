const userTags = user => [
  ...(new Set([
    ...user.interests || [],
    ...user.lookingFor || [],
    ...user.skills || [],

  ]))]
export default userTags