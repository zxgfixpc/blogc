import service from "@/util/request";
import {
  GET_ARTICLE_BY_ID,
  CREATE_UPDATE_ARTICLE,
  GET_RECOMMEND_ARTICLE,
} from "./consts";

async function getArticleByID(id: string) {
  try {
    const response = await service.request({
      method: "get",
      url: GET_ARTICLE_BY_ID,
      params: {
        article_id: id,
      },
    });
    return response.data;
  } catch (error) {
    // 请求失败，处理错误
    console.error("请求失败:", error);
    return null;
  }
}

async function createOrUpdateArticle(articleInfo) {
  try {
    const response = await service.request({
      method: "post",
      url: CREATE_UPDATE_ARTICLE,
      data: articleInfo,
    });
    return response.data;
  } catch (error) {
    // 请求失败，处理错误
    console.error("请求失败:", error);
    return error;
  }
}

async function getRecommendArticles(page: number, size: number) {
  try {
    const response = await service.request({
      method: "get",
      url: GET_RECOMMEND_ARTICLE,
      params: {
        page: page,
        size: size,
      },
    });
    return response.data;
  } catch (error) {
    // 请求失败，处理错误
    console.error("请求失败:", error);
    return error;
  }
}

export default {
  getArticleByID,
  createOrUpdateArticle,
  getRecommendArticles,
};
