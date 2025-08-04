// faq.js

// এই ফাংশন FAQ সেকশনের জন্য event listener সেট করবে
function initfaq() {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.style.display === 'block';

      // সব FAQ answer বন্ধ করো
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      // সব arrow থেকে active ক্লাস সরাও
      questions.forEach(q => q.classList.remove('active'));

      // যদি answer বন্ধ থাকে, তাহলে ওপেন করো এবং active ক্লাস দাও
      if (!isOpen) {
        answer.style.display = 'block';
        question.classList.add('active');
      }
    });
  });
}

// এক্সপোর্ট দরকার হলে এখানে করতে পারো, না হলে নিচের লাইন দরকার নেই
// export { initFAQ };
