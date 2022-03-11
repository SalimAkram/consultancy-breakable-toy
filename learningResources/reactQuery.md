# React Query

We have access to [Learn React Query](https://learn.tanstack.com/courses/enrolled/1024224), a series of very helpful videos by Tanner Linsley, its creator. Ask Casi or a Squids veteran for credentials! _Note_: The videos are for v2, whereas we use v3. Check out the upgrade guide in the docs to learn about the differences!

Suggested approach: Consider watching the videos at 1.5x - 2x speed in order to familiarize yourself with how React Query can be used.

Also, there's an active TanStack (React Query and other Tanner projects) community on Discord!

## Video Breakdown

### Batch 1: Index Page

#### Introduction

- Introduction
- Installing React Query (0:38)

#### Queries

- Basic Queries (3:19)
- Query Loading State (1:39)
- Query Error State (1:49)
- React Query Devtools (1:56)
- Automatically Refetching Queries on Window Focus (1:27)
- Query Refetching Indicators (0:53)
- Configuring Query Stale Time (1:23)
- Configuring Query Cache Time (2:32)
- Query Keys and Caching (2:04)
- Using Custom Hooks to Share and Reuse Queries (2:42)
- Using Props and State in Queries (3:37)
- Disabling Queries (0:55)
- Multi-part Query Keys (1:32)
- Automatic Query Retries (2:51)
- Query Cancellation (5:19)
- Querying Related Lists and Items (7:15)
- Query Side-Effects (4:11)

### Batch 2: Pagination

Definitely check out [the v2 => v3 upgrade guide in the docs](https://react-query.tanstack.com/guides/migrating-to-react-query-3#usepaginatedquery-has-been-deprecated-in-favor-of-the-keeppreviousdata-option) to see differences concerning pagination!

#### Paginated & Infinite Queries

- Paginated Queries (9:53)
- Prefetching Paginated Queries (3:53)
- Infinite Queries (9:58)

### Batch 3: Posting Data

#### Invalidation

- Query Invalidation Basics (1:33)
- Invalidating Without Refetching Active Queries (1:33)
- Invalidating & Refetching Inactive Queries (2:39)
- Invalidating Multiple Queries with Similar Query Keys (4:05)

#### Prefetching

- Basic query prefetching (3:34)

#### Mutations

- Mutations Overview (5:40)
- Mutations with the useMutation Hook (7:09)
- Mutation Side-Effects (6:59)
- Updating Query Data with Mutation Responses (9:52)

#### Optimistic Updates

- Optimistic Updates for List-Like Queries (7:05)
- Rollbacks for List-Like Queries (5:51)
- Optimistic Updates for Single Entity Queries (2:06)
