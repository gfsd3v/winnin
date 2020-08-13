import Api from "services/apiService";

class PostsService {
  static axiosInstance = Api.initialize();

  static getPosts = async (filter) => {
    try {
      const serverResponse = await PostsService.axiosInstance.get(
        `/${filter}/.json`,
        {
          params: {
            limit: "4",
          },
        }
      );

      return PostsService.transformRawPosts(serverResponse.data.data.children);
    } catch (e) {
      throw e;
    }
  };

  static getPostsAfter = async (filter, from) => {
    try {
      const serverResponse = await PostsService.axiosInstance.get(
        "r/reactjs.json",
        {
          params: {
            limit: "10",
          },
        }
      );

      const posts = serverResponse.data.data.children.map((obj) => obj.data);
      console.log(posts);
      return serverResponse.data;
    } catch (e) {
      throw e;
    }
  };

  static transformRawPosts = (redditPostsData) => {
    const formatedPostsObj = redditPostsData.map((post, key) => {
      return {
        id: post.data.id,
        thumb: post.data.thumbnail,
        title: post.data.title,
        createdSince: PostsService.timeSince(post.data.created_utc),
        author: post.data.author,
        authorProfileUrl: `https://www.reddit.com/u/${post.data.author}`,
        postUrl: post.data.url,
        domain: post.data.domain,
      };
    });

    return formatedPostsObj;
  };

  static timeSince = (timestamp) => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };
}

export default PostsService;
