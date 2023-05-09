import React, { useState } from 'react';
import styles from './Posts.module.css';
import { useMutation, useQueryClient } from 'react-query';
import { addPosts } from '../../api/posts';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const initialState = {
    title : '',
    subject : '',
    location : '',
    imageUrl : '',
    content : '',
  }
  const [inputValue, setInputValue] = useState(initialState);
  const queryClient = useQueryClient()
  const navigate = useNavigate();

  const mutation = useMutation(addPosts, {
    onSuccess:() => {
      queryClient.invalidateQueries("posts")
      navigate('/')
    }
  })

  const submitAddBtnHandler = async (e) => {
    e.preventDefault();
    if(inputValue.title === ''){
      alert('제목을 입력하세요.')
      return null
    }
    if(inputValue.subject === ''){
      alert('소개를 입력하세요.')
      return null
    }
    if(inputValue.location === ''){
      alert('주소를 입력하세요.')
      return null
    }
    if(inputValue.imageUrl === ''){
      alert('이미지URL을 입력하세요.')
      return null
    }
    if(inputValue.content === ''){
      alert('내용을 입력하세요.')
      return null
    }
    if(inputValue){
      mutation.mutate(inputValue)
    }
  }
  
  return (
    <div className={`${styles.container} flex flex-row`}>
      <div className={`${styles.inputWrap}`}>
        <form>
          <input
            type="text"
            className={`${styles.title} mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="제목을 입력하세요."
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                title : e.target.value,
              })
            }}
          />
          <input
            type="text"
            className={`${styles.subject} mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="소개를 입력하세요."
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                subject : e.target.value,
              })
            }}
          />
          <input
            type="text"
            className={`${styles.loc} mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="주소를 입력하세요."
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                location : e.target.value,
              })
            }}
          />
          <input
            type="text"
            className={`${styles.imgUrl} mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="이미지 URL을 입력하세요."
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                imageUrl : e.target.value,
              })
            }}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="15"
            className={`${styles.contents} mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder='내용을 입력하세요.'
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                content : e.target.value,
              })
            }}
          />
          <button className={`${styles.saveBtn}`} onClick={submitAddBtnHandler}>저장</button>
        </form>
      </div>
      <div className={`${styles.photoWrap}`}>
      </div>
    </div>
  );
};

export default Posts;
