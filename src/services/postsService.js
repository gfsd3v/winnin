import Api from "services/apiService";

class PostsService {
  static axiosInstance = Api.initialize();

  static getPosts = async (filter, lastId) => {
    const getParams = () => {
      return lastId ? { limit: "5", after: `t3_${lastId}` } : { limit: "5" };
    };
    try {
      const serverResponse = await PostsService.axiosInstance.get(
        `/${filter}/.json`,
        {
          params: getParams(),
        }
      );

      return PostsService.transformRawPosts(serverResponse.data.data.children);
    } catch (e) {
      throw e;
    }
  };

  static transformRawPosts = (redditPostsData) => {
    const formatedPostsObj = redditPostsData.map((post, key) => {
      console.log(post.data)
      return {
        id: post.data.id,
        thumb:
          post.data.thumbnail !== "self" && post.data.thumbnail !== "default"
            ? post.data.thumbnail
            : "https://cdn140.picsart.com/320945674138201.jpg?type=webp&to=crop&r=256",
        title: post.data.title,
        createdSince: PostsService.timeSince(post.data.created_utc),
        author: post.data.author,
        authorProfileUrl: `https://www.reddit.com/u/${post.data.author}`,
        postUrl: `https://www.reddit.com${post.data.permalink}`,
        url: post.data.url,
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
