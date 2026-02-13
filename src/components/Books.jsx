import { useState, useEffect } from 'react';
import BookCard from "./BookCard";
import crushCover from "../assets/crush.jpg";
import resonanceCover from "../assets/resonance.jpg";
// Import bookstore logos (add your logo images here)
import amazonLogo from "../assets/logos/amazon.png";
import barnesNobleLogo from "../assets/logos/barnes-noble.png";
import booktopiaLogo from "../assets/logos/booktopia.png";
import appleBooksLogo from "../assets/logos/apple-books.jpg";
import koboLogo from "../assets/logos/kobo.png";
// Add more logos as needed

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Handle body scroll lock when modal opens/closes
  useEffect(() => {
    if (openModal) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [openModal]);

  // Bookstore configuration with image paths and colors
  const bookstores = {
    amazon: {
      name: "Amazon",
      logo: amazonLogo,
      bgColor: "bg-[#FF9900]",
      hoverBg: "hover:bg-[#FF9900]/90",
      description: ""
    },
    barnesNoble: {
      name: "Barnes & Noble",
      logo: barnesNobleLogo,
      bgColor: "bg-[#2E7D32]",
      hoverBg: "hover:bg-[#2E7D32]/90",
      description: ""
    },
    booktopia: {
      name: "Booktopia",
      logo: booktopiaLogo,
      bgColor: "bg-[#E63946]",
      hoverBg: "hover:bg-[#E63946]/90",
      description: ""
    },
    appleBooks: {
      name: "Apple Books",
      logo: appleBooksLogo,
      bgColor: "bg-[#8A2BE2]",
      hoverBg: "hover:bg-[#8A2BE2]/90",
      description: ""
    },
    kobo:{
      name: "Kobo",
      logo: koboLogo,
      bgColor: "bg-[#008B8B]",
      hoverBg: "hover:bg-[#008B8B]/90",
      description: ""
    }
   
  };

  const books = [
    {
      id: 1,
      image: crushCover,
      title: "From Crush To Forever",
      genre: "Young Adult Romance",
      shortDescription: "An unforgettable high school romance that proves true love can survive distance, growth, and time.",
      fullDescription: `In the hallowed halls of high school, an unlikely romance blossomed between Nkanyezi, a charming and ambitious young man, and Makhosazana, a radiant and intelligent grade 10 learner. Their chance encounter sparked a flame that would burn bright, captivating their peers and becoming the stuff of legend.

As they navigated the ups and downs of adolescence, their love remained unwavering, a beacon of hope and inspiration to those around them. But fate had other plans, and Nkanyezi was forced to relocate to Cape Town to care for his ailing grandfather.

Despite the vast distance between them, their connection refused to be severed. With unwavering faith and determination, they clove to their love, proving that true devotion knows no bounds. "Love is above distance" became their mantra, a testament to the unbreakable bond they shared.

Years later, their paths converged once more, and they embarked on a lifelong journey together, sealing their love with a promise of forever.

This captivating tale of first love, resilience, and devotion is a must-read for anyone who has ever believed in the transformative power of love. Get ready to be swept away by this poignant and uplifting romance that will leave you breathless and yearning for more.`,
      rating: 4.8,
      pages: 171,
      published: "08/15/2025",
      price: "",
      badge: "",
      themes: ["First Love", "Long-Distance Relationship", "Self-Discovery", "Resilience", "Power of True Love"],
      targetAudience: "Young Adults, Romance Enthusiasts, and anyone who believes in the magic of true love",
      // Purchase links - easy to add more
      purchaseLinks: [
        {
          store: "amazon",
          url: "https://www.amazon.com/Crush-Forever-Manelisi-Ngcayivuthwa-ebook/dp/B0FN9F858B/ref=sr_1_1?dib=eyJ2IjoiMSJ9.afJZ6563fDEDMSVQ5U5n8Q.xJ8TdPPt9TK0LMjnwS2xQxBYGqrcrewdtkgNb20YA0A&dib_tag=se&qid=1771005941&refinements=p_27%3AManelisi+Ngcayivuthwa&s=digital-text&sr=1-1&text=Manelisi+Ngcayivuthwa"
        },
        {
          store: "barnesNoble",
          url: "https://www.barnesandnoble.com/w/from-crush-to-forever-manelisi-ngcayivuthwa/1148093730"
        },
        {
          store: "booktopia",
          url: "https://www.booktopia.com.au/from-crush-to-forever-manelisi-ngcayivuthwa/ebook/6610001028244.html?srsltid=AfmBOooDe3yyU2JVs7bwFPkb4u_SpRzauFwUszyc3ZjBoCPwpDvRmIlQ"
        },
        {
          store:"kobo",
          url:"https://www.kobo.com/lu/fr/ebook/from-crush-to-forever?srsltid=AfmBOopQwzvTTZd5s_SbtzV--F5S-KCS3gsgit_NF_oGafprEf9-ZYPn"
        }
        
      ]
    },
    {
      id: 2,
      image: resonanceCover,
      title: "Resonance of The Soul",
      genre: "Romantic Fantasy",
      shortDescription: "In a world where thoughts shape reality, Azande must master her extraordinary gift before it consumes her.",
      fullDescription: `In a world where thoughts shape reality, Azande's extraordinary gift becomes a double-edged sword. As she unravels dark family secrets, she must master resonating with her desires - including love - before her power consumes her.

Born with the rare ability to manifest her thoughts into reality, Azande has always known she was different. But when she discovers that her powers are tied to ancient family secrets, she realizes that her gift comes with a heavy price.

As she delves deeper into her family's mysterious past, Azande uncovers truths that challenge everything she thought she knew about herself and her heritage. With danger lurking at every corner and her powers growing increasingly unstable, she must learn to control her abilities before they spiral out of control.

But when love enters the equation, Azande discovers that the most powerful resonance of all might just be the connection between two souls. Will she master her gift before it's too late, or will the resonance of her soul become her undoing?

This enchanting romantic fantasy weaves together elements of magic, mystery, and love in a story that will captivate readers from the very first page.`,
      rating: 4.9,
      pages: 118,
      published: "10/02/2025",
      price: "",
      badge: "",
      themes: ["Magic", "Self-Discovery", "Family Secrets", "Destiny", "Soulmates"],
      targetAudience: "Fantasy Lovers, Romance Readers, Young Adults",
      // Purchase links - easy to add more
      purchaseLinks: [
        {
          store: "barnesNoble",
          url: "https://www.barnesandnoble.com/w/resonance-of-the-soul-manelisi-ngcayivuthwa/1148698381"
        },
        {
          store: "kobo",
          url: "https://www.kobo.com/ph/en/ebook/resonance-of-the-soul-1?srsltid=AfmBOorZH6imXhXVbKI2ZkdRe0LMiCkMtNfHqkcj0hzb_-jtIqaCENKo"
        },
        {
          store: "appleBooks",
          url: "https://books.apple.com/us/book/resonance-of-the-soul/id6755046644"
        }
        
      ]
    }
  ];

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => setSelectedBook(null), 300);
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <>
      <section 
        id="books" 
        className="relative w-full py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white via-blue-50 to-white px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 overflow-hidden"
        aria-labelledby="books-heading"
      >
        {/* Decorative background elements - responsive sizing */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-48 xs:w-64 sm:w-80 md:w-96 h-48 xs:h-64 sm:h-80 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl xs:blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-48 xs:w-64 sm:w-80 md:w-96 h-48 xs:h-64 sm:h-80 md:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl xs:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative w-full max-w-[1920px] mx-auto">
          {/* Section Header - fully responsive */}
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full mb-2 xs:mb-3 sm:mb-4 border border-blue-200">
              <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-blue-600 rounded-full animate-pulse mr-1 xs:mr-2"></span>
              <span className="text-blue-700 font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wide">
                Book Collection
              </span>
            </div>

            <h2 
              id="books-heading" 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 xs:mb-3 sm:mb-4"
            >
              Featured <span className="text-blue-600">Books</span>
            </h2>
            
            <div className="w-16 xs:w-20 sm:w-24 h-0.5 xs:h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-2 xs:mb-3 sm:mb-4"></div>
            
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl xs:max-w-3xl mx-auto px-2 xs:px-4">
              Stories crafted with passion, emotion, and unforgettable romance that will stay with you forever.
            </p>
          </div>

          {/* Books Grid - responsive gap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto px-2 xs:px-0">
            {books.map((book) => (
              <BookCard
                key={book.id}
                {...book}
                onClick={() => handleOpenModal(book)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal - fully responsive */}
      {openModal && selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-4 md:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px] xs:backdrop-blur-sm"
            onClick={handleCloseModal}
          />

          {/* Modal Content - responsive sizing */}
          <div className="relative w-full max-w-[95%] xs:max-w-[90%] sm:max-w-3xl md:max-w-4xl max-h-[95vh] xs:max-h-[90vh] overflow-y-auto bg-white rounded-2xl xs:rounded-3xl shadow-2xl animate-modal-in">
            {/* Close Button - responsive */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 z-10 bg-white/90 backdrop-blur-sm p-1.5 xs:p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Body - responsive padding */}
            <div className="p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10">
              {/* Header with Image and Title - responsive layout */}
              <div className="flex flex-col md:flex-row gap-4 xs:gap-5 sm:gap-6 md:gap-8 mb-6 xs:mb-8">
                {/* Book Cover - responsive sizing */}
                <div className="w-1/2 xs:w-1/3 md:w-48 lg:w-64 flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 xs:-inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl xs:rounded-2xl opacity-75 blur"></div>
                    <img
                      src={selectedBook.image}
                      alt={selectedBook.title}
                      className="relative w-full h-auto rounded-xl xs:rounded-2xl shadow-xl"
                    />
                  </div>
                </div>

                {/* Title and Basic Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-blue-100 px-2 xs:px-3 py-0.5 xs:py-1 rounded-full mb-2 xs:mb-3">
                    <span className="text-blue-700 font-semibold text-[10px] xs:text-xs sm:text-sm">{selectedBook.genre}</span>
                  </div>
                  
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 xs:mb-3">
                    {selectedBook.title}
                  </h2>

                  {selectedBook.badge && (
                    <span className="inline-block bg-blue-600 text-white text-[10px] xs:text-xs sm:text-sm font-bold px-2 xs:px-3 py-0.5 xs:py-1 rounded-full mb-3 xs:mb-4">
                      {selectedBook.badge}
                    </span>
                  )}

                  {/* Stats Grid - responsive */}
                  <div className="grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 md:gap-4 mb-4 xs:mb-6">
                    <div className="bg-blue-50 p-1 xs:p-2 sm:p-3 rounded-lg xs:rounded-xl text-center">
                      <div className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-blue-600">{selectedBook.rating}</div>
                      <div className="text-[8px] xs:text-[10px] sm:text-xs text-gray-600">Rating</div>
                    </div>
                    <div className="bg-blue-50 p-1 xs:p-2 sm:p-3 rounded-lg xs:rounded-xl text-center">
                      <div className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-blue-600">{selectedBook.pages}</div>
                      <div className="text-[8px] xs:text-[10px] sm:text-xs text-gray-600">Pages</div>
                    </div>
                    <div className="bg-blue-50 p-1 xs:p-2 sm:p-3 rounded-lg xs:rounded-xl text-center">
                      <div className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-blue-600">{selectedBook.published}</div>
                      <div className="text-[8px] xs:text-[10px] sm:text-xs text-gray-600">Published</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Description - responsive text */}
              <div className="mb-6 xs:mb-8">
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-2 xs:mb-3">Synopsis</h3>
                <div className="prose prose-blue max-w-none">
                  {selectedBook.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-xs xs:text-sm sm:text-base text-gray-600 mb-3 xs:mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Themes - responsive */}
              {selectedBook.themes && (
                <div className="mb-6 xs:mb-8">
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-2 xs:mb-3">Themes</h3>
                  <div className="flex flex-wrap gap-1 xs:gap-2">
                    {selectedBook.themes.map((theme, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Audience - responsive */}
              {selectedBook.targetAudience && (
                <div className="mb-6 xs:mb-8">
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-2 xs:mb-3">Target Audience</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 bg-gray-50 p-3 xs:p-4 rounded-lg xs:rounded-xl">
                    {selectedBook.targetAudience}
                  </p>
                </div>
              )}

              {/* Purchase Links - responsive grid */}
              {selectedBook.purchaseLinks && selectedBook.purchaseLinks.length > 0 && (
                <div className="border-t border-gray-200 pt-6 xs:pt-8">
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-3 xs:mb-4">Purchase Options</h3>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                    {selectedBook.purchaseLinks.map((link, index) => {
                      const store = bookstores[link.store];
                      if (!store) return null;
                      
                      return (
                        <button
                          key={index}
                          onClick={() => handleLinkClick(link.url)}
                          className={`group flex items-center justify-between ${store.bgColor} hover:${store.hoverBg} text-white p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                        >
                          <div className="flex items-center gap-2 xs:gap-3">
                            <img 
                              src={store.logo} 
                              alt={store.name}
                              className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                            />
                            <div className="text-left">
                              <div className="font-bold text-xs xs:text-sm sm:text-base">{store.name}</div>
                              <div className="text-[8px] xs:text-[10px] sm:text-xs opacity-90">{store.description}</div>
                            </div>
                          </div>
                          <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add custom animations and xs breakpoint */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-modal-in {
          animation: modalIn 0.3s ease-out;
        }
        
        /* Custom breakpoint for extra small devices */
        @media (min-width: 380px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </>
  );
};

export default Books;