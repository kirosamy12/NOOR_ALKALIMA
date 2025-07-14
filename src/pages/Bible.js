import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Bible = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingVerses, setLoadingVerses] = useState(false);

  useEffect(() => {
    api.get('/bible/books')
      .then(res => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    // بناء قائمة الفصول
    const chaptersArr = Array.from({ length: book.chapters }, (_, i) => i + 1);
    setChapters(chaptersArr);
    // جلب آيات الفصل الأول تلقائياً
    fetchVerses(book.name, 1);
  };

  const fetchVerses = (bookName, chapter) => {
    setLoadingVerses(true);
    api.get('/bible/verses', { params: { book: bookName, chapter } })
      .then(res => {
        setVerses(res.data);
        setLoadingVerses(false);
      })
      .catch(() => setLoadingVerses(false));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">الكتاب المقدس</h1>
      {loading ? (
        <p>جاري التحميل...</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">الأسفار</h2>
            <ul className="space-y-2">
              {books.map(book => (
                <li key={book._id}>
                  <button
                    className={`w-full text-right px-3 py-2 rounded-lg ${selectedBook && selectedBook._id === book._id ? 'bg-primary-100 text-primary-700 font-bold' : 'bg-gray-100 hover:bg-primary-50'}`}
                    onClick={() => handleBookClick(book)}
                  >
                    {book.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            {selectedBook ? (
              <>
                <h2 className="text-xl font-semibold mb-4">{selectedBook.name}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {chapters.map(ch => (
                    <button
                      key={ch}
                      className="px-3 py-1 rounded bg-gray-200 hover:bg-primary-200"
                      onClick={() => fetchVerses(selectedBook.name, ch)}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
                {loadingVerses ? (
                  <p>جاري تحميل الآيات...</p>
                ) : (
                  <div className="bg-white rounded-lg shadow p-4">
                    {verses.length > 0 ? (
                      <ul className="space-y-2">
                        {verses.map(verse => (
                          <li key={verse._id}>
                            <span className="font-bold">{verse.verse}.</span> {verse.text}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>لا توجد آيات لهذا الفصل.</p>
                    )}
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-600">اختر سفرًا لعرض فصوله وآياته.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bible; 