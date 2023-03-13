import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://yxyjcgzfnlwsdwzldkkm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4eWpjZ3pmbmx3c2R3emxka2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3ODYwOTMsImV4cCI6MTk5MzM2MjA5M30.DQ1W2d1t3xs2Ymb5G3bYS5_HRviiXXIY5Sh7JVBe6aI'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let favbook = document.getElementById('title');
  favbook.innerHTML += `<ul>${book.title}</ul>`;
}

for (let book of books) {
  let favAuth = document.getElementById('author');
  favAuth.innerHTML += `<ul>${book.author}</ul>`;
}

for (let book of books) {
  let favIsbn = document.getElementById('isbn');
  favIsbn.innerHTML += `<ul>${book.isbn}</ul>`;
}
