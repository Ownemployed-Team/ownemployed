const businessTags = business => [
  ...(new Set([
    ...business.keyActivities || [],
    ...business.keyResources || [],
    ...business.customerRelationships || [],
    ...business.channels || [],
    ...business.customerSegments || [],
    ...business.revenueStream || [],
    ...business.keyPartners || [],
  ]))]
export default businessTags