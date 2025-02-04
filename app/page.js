"use client"

import { useState } from 'react';
import { shortenUrl } from '../utils/tinyurl';
import style from './page.module.css'

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shortened = await shortenUrl(url);
    setShortUrl(shortened);
  };

  return (
    <div className={style.maindiv}>
      <h1>TinyURL Shortener</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL here"
          className={style.input}
          required
        />
        <button type="submit" className={style.button}>
          Shorten
        </button>
      </form>
      {shortUrl && (
        <div className={style.twodiv}>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}