import { gql } from 'apollo-boost';

export const GET_ALL_TRAY = gql`
   query KnowledgeBaseArticles($page: Int, $perPage: Int, $categoryIds: [String], 
  $tags: [String], $sortBy: String) {
  knowledgeBaseArticles(page: $page, perPage: $perPage, categoryIds: $categoryIds, 
    tags: $tags, sortBy: $sortBy) {
   _id
    title
    icon
    content
    summary
    attachmentId
    publishedDate
    source
    status
    draftJSRawContent
    createdBy
    authors {
      username
      email
      role
      emailSignatures
      getNotificationByEmail
      isOwner
      isActive
      isAnonymous
      isOnline
      organizationId
      defaultHomeScreen
      lastLogin
    }
    categories{
      title
    }
    tags{
      name
    }
  }
}
`;