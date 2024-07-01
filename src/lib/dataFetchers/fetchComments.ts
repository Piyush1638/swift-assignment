export const fetchComments = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const comments = await response.json();
      return comments;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  };
  