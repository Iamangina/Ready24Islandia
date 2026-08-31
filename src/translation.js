import transl from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    pl: {
        translation: {

            //NAWIGACJA
            nav: {
                home: "Strona Główna",
                trips: "Wyjazdy",
                training: "Szkolenia",
                about: "O mnie",
                booking: "Zarezerwuj",
                design: "Design i wykonanie:"
            },

            //STRONA GŁÓWNA
            home: {
                mainTitle:{
                    one: "WYJAZDY",
                    two: "NA QUADACH",
                    three: "W ISLANDII"
                },
                descriptP: "Wyjazdy quadami po dzikiej Islandii. Trening, adrenalina, przygoda - w małych grupach, z pasją.",
                buttonMain: "ZOBACZ WIĘCEJ",
                sectionText: {
                    h1: "Jeżdżę na quadach na co dzień. Prowadzę wyjazdy i pokazuję prawdziwą Islandię.",
                    p: "To nie są typowe przejażdżki po wyznaczonych ścieżkach. Wyprawy skierowane są przede wszystkim do osób, które czują się pewnie za kierownicą quada i szukają prawdziwej terenowej przygody. Trasy prowadzą przez różnorodne islandzkie krajobrazy, a ich przebieg dostosowywany jest do warunków i możliwości grupy, zapewniając maksymalnie satysfakcjonujące doświadczenie.",
                },
                sectionIcons: {
                    one: "Niezapomniane wrażenia, przygoda i wyzwanie",
                    two: "Maksymalnie 2 osobowa grupa, indywidualne podejście",
                    three: "100% pasji i bezpieczeństwa"
                },
                sideSection: {
                    oneday: {
                        title: "1-dniowy wyjazd ze szkoleniem",
                        description: "Jazda łącząca teorię i praktykę na torze oraz w terenie. Idealny na start."
                    },
                    threedays: {
                        title: "3-dniowa wyprawa",
                        soon: "Wkrótce",
                        description: "Trzy dni jazdy, przygód i islandzkich krajobrazów. Szczegóły już wkrótce."
                    },
                    fivedays: {
                        title: "5-dniowa wyprawa",
                        soon: "Wkrótce",
                        description: "Jeszcze więcej terenu, wyzwań i niezapomnianych miejsc. Bądź na bieżąco!"
                    }
                },
                bookingSteps: {
                    title: "Rezerwacja w 3 prostych krokach",
                    first: {
                        h1: "Wybierz wyjazd",
                        p: "Zdeycyduj, która przygoda jest dla Ciebie"
                    },
                    second: {
                        h1: "Dopasuj termin",
                        p: "Wybierz dogodny termin i liczbę uczestników"
                    },
                    third: {
                        h1: "Zarezerwuj i jedź",
                        p: "Potwierdź rezerwajce i ruszaj na przygodę"
                    }
                },
                tripsInfo: {
                    h1: "Wyjazdy na quadach",
                    p: "Od szkolenia po wielodniowe wyprawy po dzikiej islandii.",
                    btn: "ZOBACZ WIĘCEJ",
                    trips: {
                        oneday: {
                            h2: "Wyjazd 1-dniowy ze szkoleniem",
                            p: "Szkolenie teoretyczne i praktyczne na torze, jazda w terenie."
                        },
                        threedays: {
                            h2: "3-dniowa wyprawa",
                            p: "Więcej przygód, więcej miejsc. Szczegóły już wkrótce."
                        },
                        fivedays: {
                            h2: "5-dniowa wyprawa",
                            p: "Najlpesze trasy, prawdziwa, dzika Islandia."
                        },
                        soon: "Wkrótce"
                    }
                },
                quads: {
                    title: "Dostępne quady",
                    renegade: "Mocny, zwinny i stworzony do jazdy w trudnym terenie.",
                    one: "1 osoba",
                    outlander: "Stabilny, komfortowy i niezawodny w każdych warunkach.",
                    two: "2 osoby"
                },
                youtube: {
                    title: "Kanał na Youtubie",
                    p: "Zobacz techniki jazdy, porady, sprzęt którego używam i wiele więcej."
                }

            },

            //WYJAZDY EN
            trips: {
                p: "Strona Główna > Wyjazdy",
                h1: "WYJAZDY NA QUADACH W ISLANDII",
                h2: "Odkryj Islandię z innej perspektywy. Wyjazdy quadowe skierowane głównie do osób posiadających już doświadczenie w jeździe. Każda trasa to niezapomniane widoki, emocje i bezpieczeństwo.",
                tripsChoose: {
                    title: "Wybierz swoją przygodę",
                    one: {
                        h2: "Wyjazd 1-dniowy ze szkoleniem",
                        time: "min.2h",
                        h3: "Idealny wybór jeżeli chcesz przetestować swoje umiejętności na torze, nauczyć się czegoś nowego a przy okazji dobrze się bawić.",  
                    },
                    three: {
                        h2: "3-dniowa wyprawa",
                        time: "3dni - Wkrótce ",
                        h3: "Więcej przygód, więcej miejsc do odkrycia. Idealna dla osób z doświadczeniem.",  
                    },
                    five: {
                        h2: "5-dniowa wyprawa",
                        time: "5dni - Wkrótce ",
                        h3: "Najlepsze trasy, prawdziwa Islandia. Adrenalina i walka z samym sobą. Dla doświadczonych quadowców."
                    },
                    btn: "Zobacz szczegóły"
                },
                tripsInfo: {
                    h1: "Dlaczego warto wybrać moje wyjazdy?",
                    tripsReasons: {
                        one: {
                            h2: "100% bezpieczeństwa",
                            p: "Profesjonalne szkolenie, najlepszy sprzęt."
                        },
                        two: {
                            h2: "Małe grupy",
                            p: "Maksymalnie 2 osoby w grupie - indywidialne podejście"
                        },
                        three: {
                            h2: "Sprawdzone trasy",
                            p: "Trasy, które znam doskonale i regularnie sprawdzam"
                        },
                        four: {
                            h2: "Niezapomniane widoki",
                            p: "Miejsca niedostępne dla zwykłych turystów. Gwarantowane emocje"
                        }
                    }
                },
                tripsBooking: {
                    h1: "Jak zarezerwować wyjazd?",
                    steps: {
                        one: {
                            h2: "Wybierz wyjazd",
                            p: "Zobacz dostępne wyjazdy i wybierz idealny dla siebie."
                        },
                        two: {
                            h2: "Sprawdź termin",
                            p: "Wybierz dogodny termin i liczbę uczestników."
                        },
                        three: {
                            h2: "Zarezerwuj i zapłać",
                            p: "Potwierdź rezerwacje i dokonaj płatności."
                        },
                        four: {
                            h2: "Jedź i ciesz się!",
                            p: "Przyjedź gotowy na przygodę. My zajmiemy się resztą."
                        }
                    }
                },
                tripsQuestions: {
                    h1: "Masz pytania?",
                    p: "Nie wiesz, który wyjazd wybrać? Skontaktuj się ze mną, pomogę Ci znaleźć idealną przygodę!",
                    btn: "Skontaktuj się",
                    email: "ready24@ready24.is"
                }
                
            },
            //TRENING
            training: {
                p: "Strona Główna > Szkolenia",
                h1: "TRENING NA TORZE",
                h2: "Trening na torze to idealna okazja, by rozwinąć swoje umiejętności, poznać możliwości quada i poczuć prawdziwą kontrolę w każdych warunkach.",
                trainingDescr: {
                    h2: "Co to jest trening na torze?",
                    p: "To praktyczne zajęcia prowadzone przez doświadczonego instruktora, które pomogą Ci lepiej panować nad quadem w bezpiecznym, kontrolowanym środowisku. Niezależnie od poziomo zaawansowania - znajdziesz coś dla siebie!"
                },
                trainingIcons: {
                    one: {
                        h3: "Kontrola i technika",
                        p: "Naucz się precyzyjnego prowadzenia, pokonywania zakrętów i odpowiedniej pozycji."
                    },
                    two: {
                        h3: "Bezpieczne środowisko",
                        p: "Ćwicz w kontrolowanych warunkach z doświadczonym instruktorem."
                    },
                    three: {
                        h3: "Dla każdego poziomu",
                        p: "Zarówno dla początkujących, jak i zaawansowanych pasjonatów quadów."
                    }
                },
                trainingYoutube: {
                    h2: "Zobacz trening w akcji",
                    link: "Zobacz więcej na Youtubie",
                    p1: "Ćwiczenie 'ósemka' na utrzymanie biegłości i poprawę techniki jazdy quadem.",
                    p2: "Jeden ze sposobów na pokonanie kłody/ beczki.",
                    p3: "Wykorzystanie pachołków do praktycznych ćwiczeń jazdy, trawers i przejazd przez bramkę."
                },
                trainingQuestions: {
                    h1: "Masz pytania?",
                    p: "Skontaktuj się ze mną, chętnie odpowiem na wszystkie pytania!",
                    email: "ready24@ready24.is"
                }
            },
            about: {
                p: "Strona Główna > O mnie",
                h1: "O MNIE",
                h2: '"V" mam na imię Artur i zawodowo jeżdzę na quadzie w Islandii. Tworzę wyjazdym które łączą adrenaline, piękne widoki i bezpieczeństwo.',
                myStory: {
                    p: "MOJA HISTORIA",
                    h2: "Jak zaczęła się moja przygoda z quadami na Islandii?",
                    p1: "Moja przygoda z quadami rozpoczęła się w 2022 roku właśnie tutaj, na Islandii. Początkowo pracowałem w jednej z komercyjnych firm, prowadząc proste wycieczki dla turystów, ale z czasem pojawiła się potrzeba stworzenia czegoś bardziej autentycznego - pokazania Islandii i jazdy na quadach tak, jak sam ją odbieram.",
                    p2: "Islandia od początku zrobiła na mnie ogromne wrażenie swoją surową naturą, bezkresną przestrzenią i nieustanną zmiennością krajobrazów. To właśnie ta wyjątkowa sceneria stała się inspiracją do przekształcenia pasji w sposób na życie i tworzenia wyjazdów dla osób, które chcą odkrywać Islandię z zupełnie innej perspektywy - zza kierownicy quada. Równolegle prowadzę treningi, dzięki którym stale doskonalę technikę jazdy i lepiej poznaję sprzęt, tak aby żaden podjazd, trawers czy trudny odcinek nie zatrzymywał nas w miejscu.",
                    p3: "Na co dzień mieszkam na Islandii i nieustannie eksploruję nowe trasy, sprawdzam warunki i dbam o to, by każdy wyjazd był bezpieczny, dynamiczny i przede wszystkim niezapomniany."
                },
                values: {
                    h2: "Moje wartości",
                    one: {
                        h3: "Bezpieczeństwo przede wszystkim",
                        p: "Stawiam na najwyższe standardy bezpieczeństwa, profesjonalny sprzęt i dokładne szkolenia."
                    },
                    two: {
                        h3: "Indywidualne podejście",
                        p: "Małe grupy max.2 osoby"
                    },
                    three: {
                        h3: "Autentyczne doświadczenia",
                        p: "Trasy tam, gdzie Islandia pokazuje swój prawdziwy charakter."
                    },
                    four: {
                        h3: "Pasja i zaangażowanie",
                        p: "Dzielę się wiedzą i chętnie odpowiem na wsyzstkie pytania dotyczące quadów czy Islandii."
                    }
                },
                more: {
                    h2: "Poza quadami",
                    p: "Poza quadami interesuję się szeroko pojętym sprzętem outdoorowym, testuję i sprawdzam jego praktyczność. Pasjonują mnie scyzoryki i noże, a także współprowadzę sklep internetowy z produktami Victorinox - Ready24. Dodatkowo prowadzę kanał na YouTube, gdzie dzielę się swoimi doświadczeniami i wiedzą związaną z quadami."
                },
                questions: {
                    h1: "Masz pytania?",
                    p: "Skontaktuj się ze mną, chętnie odpowiem na wszystkie pytania!"
                }
            },
            trip1Details: {
                p: "Strona Główna > Wyjazdy > Wyjazd 1-dniowy",
                h1: "WYJAZD 1-DNIOWY ZE SZKOLENIEM",
                descr: "Idealny wybór na rozpoczęcie przygody z quadami. Bezpieczna trasa, trening na torze i jazda w terenie - wszystko w jeden dzień.",
                time: "min. 2h",
                about: {
                    h1: "O wyjeździe",
                    p: "Ten wyjazd to idealne połączenie nauki i przygody. Zaczynamy od szkolenia np. na torze, gdzie poznasz quada, podstawy jazdy i techniki bezpieczeństwa. Następnie ruszamy w teren, aby odkrywać krajobrazy Islandii. Program dostosowujemy do Twoich preferencji - możesz wybrać więcej jazdy na torze lub terenie.",
                    icons: {
                        one: "Trening na torze",
                        two: "Jazda w terenie",
                        three: "Sprzęt i paliwo w cenie"
                    },
                    program: {
                        h2: "Przykładowy program wyjazdu",
                        step1: {
                            h3: "Spotkanie i szkolenie",
                            p: "Przyjazd, powitanie, omówienie zasad bezpieczeństwa i dojazd na tor."
                        },
                        step2: {
                            h3: "Trening na torze",
                            p: "Szkolenie na torze, nauka poprawnej pozycji na quadzie oraz technik jazdy quadem."
                        },
                        step3: {
                            h3: "Jazda w terenie",
                            p: "Wyruszamy w trasę terenową, malownicze widoki, górskie szlaki i dzika Islandia."
                        },
                        step4: {
                            h3: "Powrót"
                        }
                    },
                    equipment: {
                        h3: "Co zabrać?",
                        one: "Wygodne ubranie odporne na brud",
                        two: "Buty motocyklowe, trekkingowe lub sportowe",
                        three: "Rękawice (jeśli masz)",
                        four: "Dobry humor i energię!"
                    },
                    gallery: "Galeria",
                    questions: {
                        h3: "Masz pytania?",
                        p: "Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania!"
                    },
                    form: {
                        h2: "Zarezerwuj swój wyjazd",
                        h4: "Wybierz preferencję",
                        option1: {
                            h5: "Trening na torze + jazda w terenie",
                            p: "Pełne doświadczenie"
                        },
                        option2: {
                            h5: "Więcej jazdy w terenie",
                            p: "Dłuższa trasa off-road"
                        }
                    },
                    book: "Potwierdź",
                    time: "Czas trwania",
                    twoh: "2 godziny",
                    fourh: "4 godziny",
                    sixh: "6 godzin",
                    level: "Poziom trudności",
                    date: "Data",
                    particip: "Liczba uczestników",
                    price: "Cena",
                    data: {
                        h2: "Dane rezerwacji",
                        email: "Adres e-mail",
                        phone: "Numer telefonu",
                        names: "Imię i nazwisko uczestnika",
                        price: "Do zapłaty",
                        btnSubmit: "Potwierdź rezerwację",
                        btnReturn: "Wróć",
                        sending: "Wysyłanie...",
                        error: "Nie udało się wysłać formularza."
                    }, 
                    new: "Nowa rezerwacja",
                    thankyou: "Dziękujemy!",
                    confirm1: "Dziękujemy za wysłanie formularza.",
                    confirm2: "Skontaktujemy się z Tobą najszybciej, jak to możliwe, aby potwierdzić rezerwację oraz przekazać wszystkie szczegóły wyjazdu."
                }
            },
            soon: {
                h1: "TA PRZYGODA JEST W PRZYGOTOWANIU",
                h2: "Ten wyjazd wciąż dopracowujemy w każdym szczególe, aby dostarczyć Ci niezapomnianych wrażeń i 100% bezpieczeństwa.",
                h22: "Sprawdź gotowe wyjazdy",
                p: "Nie czekaj! Sprawdź dostępne wyprawy po Islandii",
                btn: "Zobacz dostępne wyjazdy"
            }

            }
        },
    en: {
        translation: {

            //NAWIGACJA 

            nav: {
                home: "Home",
                trips: "Tours",
                training: "Training",
                about: "About me",
                booking: "Book now",
                design: "Designed by:" 
            },

            //STRONA GŁÓWNA EN
            home: {
                mainTitle: {
                    one: "ATV",
                    two: "TOURS",
                    three: "IN ICELAND"
                },
                descriptP: "ATV tours through the wild landscapes of Iceland. Training, adrenaline, adventure — in small groups, driven by passion.",
                buttonMain: "LEARN MORE",
                sectionText: {
                    h1: "I ride ATVs every day. I lead tours and show you the real Iceland.",

                    p: "These aren’t typical rides along designated trails. The tours are primarily designed for riders who feel confident handling an ATV and are looking for a genuine off-road adventure. The routes take you through diverse Icelandic landscapes and are adapted to the conditions and the group’s skill level to provide the most rewarding experience possible.",
                },
                sectionIcons: {
                    one: "Unforgettable experiences, adventure and challenge",
                    two: "Maximum group size of 2, with a personalized approach",
                    three: "100% passion and safety"
                },
                sideSection: {
                    oneday: {
                        title: "1-Day Tour with Training",
                        description: "A combination of theory and practical riding on the track and off-road. Perfect for getting started."
                    },
                    threedays: {
                        title: "3-Day Adventure",
                        soon: "Coming Soon",
                        description: "Three days of riding, adventure, and Icelandic landscapes. More details coming soon."
                    },
                    fivedays: {
                        title: "5-Day Adventure",
                        soon: "Coming Soon",
                        description: "Even more off-road riding, challenges, and unforgettable places. Stay tuned!"
                    }
                },
                bookingSteps: {
                    title: "Book in 3 Simple Steps",

                    first: {
                        h1: "Choose Your Tour",
                        p: "Decide which adventure is right for you"
                    },

                    second: {
                        h1: "Choose a Date",
                        p: "Select a convenient date and number of participants"
                    },

                    third: {
                        h1: "Book and Ride",
                        p: "Confirm your booking and get ready for the adventure"
                    }
                },
                tripsInfo: {
                    h1: "ATV Tours",
                    p: "From training sessions to multi-day adventures through the wild landscapes of Iceland.",
                    btn: "LEARN MORE",
                    trips: {
                        oneday: {
                            h2: "1-Day Tour with Training",
                            p: "Theoretical and practical training on the track, followed by off-road riding."
                        },
                        threedays: {
                            h2: "3-Day Adventure",
                            p: "More adventure, more places to explore. Details coming soon."
                        },
                        fivedays: {
                            h2: "5-Day Adventure",
                            p: "The best routes through the real, wild Iceland."
                        },
                        soon: "Coming Soon"
                    }
                },
                quads: {
                    title: "Available ATVs",
                    renegade: "Powerful, agile, and built for challenging terrain.",
                    one: "1 person",
                    outlander: "Stable, comfortable, and reliable in all conditions.",
                    two: "2 people"
                },
                youtube: {
                    title: "YouTube Channel",
                    p: "Check out riding techniques, tips, the gear I use, and much more."
                }
            },

            //WYJAZDY EN
            trips: {
                p: "Home > Tours",
                h1: "ATV TOURS IN ICELAND",
                h2: "Discover Iceland from a different perspective. Our ATV tours are designed primarily for riders with previous experience. Every route offers unforgettable views, excitement, and safety.",
                tripsChoose: {
                    title: "Choose Your Adventure",
                    one: {
                        h2: "1-Day Tour with Training",
                        time: "min. 2 hours",
                        h3: "The perfect choice if you want to test your skills on the track, learn something new, and have a great time along the way.",
                    },
                    three: {
                        h2: "3-Day Adventure",
                        time: "3 days - Coming Soon",
                        h3: "More adventure, more places to discover. Perfect for riders with previous experience.",
                    },
                    five: {
                        h2: "5-Day Adventure",
                        time: "5 days - Coming Soon",
                        h3: "The best routes through the real Iceland. Adrenaline, challenges, and pushing your limits. Designed for experienced ATV riders."
                    },
                    btn: "View Details"
                },
                tripsInfo: {
                    h1: "Why Choose My ATV Tours?",
                    tripsReasons: {
                        one: {
                            h2: "100% Safety",
                            p: "Professional training and top-quality equipment."
                        },
                        two: {
                            h2: "Small Groups",
                            p: "Maximum of 2 people per group for a personalized experience."
                        },
                        three: {
                            h2: "Tested Routes",
                            p: "Routes I know inside out and check regularly."
                        },
                        four: {
                            h2: "Unforgettable Views",
                            p: "Places beyond the reach of ordinary tourists. Unforgettable experiences guaranteed."
                        }
                    }
                },
                tripsBooking: {
                    h1: "How to Book Your Tour?",
                    steps: {
                        one: {
                            h2: "Choose Your Tour",
                            p: "Explore the available tours and choose the one that’s right for you."
                        },
                        two: {
                            h2: "Choose a Date",
                            p: "Select a convenient date and number of participants."
                        },
                        three: {
                            h2: "Book and Pay",
                            p: "Confirm your booking and complete the payment."
                        },
                        four: {
                            h2: "Ride and Enjoy!",
                            p: "Arrive ready for adventure. We’ll take care of the rest."
                        }
                    }
                },
                tripsQuestions: {
                    h1: "Have Questions?",
                    p: "Not sure which tour to choose? Get in touch and I’ll help you find the perfect adventure!",
                    btn: "Contact Me",
                    email: "ready24@ready24.is"
                }
            },

            //TRENING EN
            training: {
                p: "Home > Training",
                h1: "ATV TRACK TRAINING",
                h2: "Track training is the perfect opportunity to improve your skills, explore your ATV’s capabilities, and gain real control in all conditions.",

                trainingDescr: {
                    h2: "What Is Track Training?",
                    p: "Practical training led by an experienced instructor, designed to help you gain better control of your ATV in a safe, controlled environment. Whatever your skill level, there’s something for you!"
                },

                trainingIcons: {
                    one: {
                        h3: "Control and Technique",
                        p: "Learn precise handling, cornering techniques, and proper riding position."
                    },

                    two: {
                        h3: "Safe Environment",
                        p: "Practice in controlled conditions with an experienced instructor."
                    },

                    three: {
                        h3: "For All Skill Levels",
                        p: "Suitable for both beginners and experienced ATV enthusiasts."
                    }
                },

                trainingYoutube: {
                    h2: "See the Training in Action",
                    link: "See More on YouTube",
                    p1: "Figure-eight exercise designed to maintain riding proficiency and improve ATV riding technique.",
                    p2: "One technique for riding over a log or barrel.",
                    p3: "Using cones for practical riding exercises, including traversing slopes and riding through a gate."
                },

                trainingQuestions: {
                    h1: "Have Questions?",
                    p: "Get in touch - I’ll be happy to answer any questions you have!",
                    email: "ready24@ready24.is"
                }
            },
            about: {
                p: "Home > About Me",
                h1: "ABOUT ME",
                h2: '"V" - my name is Artur, and I ride ATVs professionally in Iceland. I organize tours that combine adrenaline, stunning landscapes, and safety.',
                myStory: {
                    p: "MY STORY",
                    h2: "How Did My ATV Adventure in Iceland Begin?",

                    p1: "My ATV adventure began in 2022, right here in Iceland. I initially worked for a commercial tour company, leading simple ATV tours for tourists. Over time, however, I felt the need to create something more authentic - to show Iceland and ATV riding the way I experience them myself.",

                    p2: "From the very beginning, Iceland made a huge impression on me with its raw nature, endless open spaces, and constantly changing landscapes. This unique scenery inspired me to turn my passion into a way of life and create tours for people who want to discover Iceland from a completely different perspective - from behind the handlebars of an ATV. At the same time, I regularly train to continuously improve my riding technique and deepen my knowledge of the machines, so that no climb, traverse, or challenging section can stop us in our tracks.",

                    p3: "I live in Iceland and constantly explore new routes, check conditions, and make sure every tour is safe, dynamic, and, above all, unforgettable."
                },
                values: {
                    h2: "My Values",
                    one: {
                        h3: "Safety First",
                        p: "I focus on the highest safety standards, professional equipment, and thorough training."
                    },
                    two: {
                        h3: "Personalized Approach",
                        p: "Small groups of no more than 2 people."
                    },
                    three: {
                        h3: "Authentic Experiences",
                        p: "Routes that take you to places where Iceland reveals its true character."
                    },
                    four: {
                        h3: "Passion and Commitment",
                        p: "I’m happy to share my knowledge and answer any questions you may have about ATVs or Iceland."
                    }
                },
                more: {
                    h2: "Beyond ATVs",
                    p: "Beyond ATVs, I’m interested in all kinds of outdoor gear, which I test and evaluate in real-world conditions. I’m particularly passionate about pocket knives and knives, and I also co-run Ready24, an online store offering Victorinox products. In addition, I run a YouTube channel where I share my ATV experiences, knowledge, and practical insights."
                },
                questions: {
                    h1: "Have Questions?",
                    p: "Get in touch - I’ll be happy to answer any questions you have!"
                }
            },

            //TRIP 1 DETAILS EN
            trip1Details: {
                p: "Home > Tours > 1-Day Tour",
                h1: "1-DAY TOUR WITH TRAINING",
                descr: "The perfect choice for starting your ATV adventure. A safe route, track training, and off-road riding — all in one day.",
                time: "min. 2 hours",
                about: {
                    h1: "About the Tour",
                    p: "This tour is the perfect combination of training and adventure. We start with a training session, for example on the track, where you’ll get familiar with the ATV, learn the basics of riding, and go through essential safety techniques. Then we head off-road to explore Icelandic landscapes. The program is tailored to your preferences — you can choose to spend more time on the track or out in the terrain.",
                    icons: {
                        one: "Track Training",
                        two: "Off-Road Riding",
                        three: "Equipment and Fuel Included"
                    },
                    program: {
                        h2: "Example Tour Schedule",
                        step1: {
                            h3: "Meeting and Briefing",
                            p: "Arrival, welcome, safety briefing, and transfer to the track."
                        },
                        step2: {
                            h3: "Track Training",
                            p: "Training on the track, learning the correct riding position and ATV riding techniques."
                        },
                        step3: {
                            h3: "Off-Road Riding",
                            p: "We head out on an off-road route with scenic views, mountain trails, and the wild landscapes of Iceland."
                        },
                        step4: {
                            h3: "Return"
                        }
                    },
                    equipment: {
                        h3: "What to Bring?",
                        one: "Comfortable clothes that can get dirty",
                        two: "Motorcycle, hiking, or sports shoes",
                        three: "Gloves (if you have them)",
                        four: "Good vibes and plenty of energy!"
                    },
                    gallery: "Gallery",
                    questions: {
                        h3: "Have Questions?",
                        p: "Get in touch - we’ll be happy to answer any questions you have!"
                    },
                    form: {
                        h2: "Book Your Tour",
                        h4: "Choose Your Preference",
                        option1: {
                            h5: "Track Training + Off-Road Riding",
                            p: "The full experience"
                        },
                        option2: {
                            h5: "More Off-Road Riding",
                            p: "A longer off-road route"
                        }
                    },
                    book: "Confirm",
                    time: "Duration",
                    twoh: "2 hours",
                    fourh: "4 hours",
                    sixh: "6 hours",
                    level: "Difficulty Level",
                    date: "Date",
                    particip: "Number of Participants",
                    price: "Price",
                    data: {
                        h2: "Booking Details",
                        email: "Email Address",
                        phone: "Phone Number",
                        names: "Participant Name",
                        price: "Total to Pay",
                        btnSubmit: "Confirm Booking",
                        btnReturn: "Back",
                        sending: "Sending...",
                        error: "The form could not be submitted."
                    },
                    new: "New reservation",
                    thankyou: "Thank you!",
                    confirm1: "Thank you for submitting the form.",
                    confirm2: "We’ll contact you as soon as possible to confirm your booking and provide all the details about your tour."
                }
            },
            soon: {
                h1: "THIS ADVENTURE IS COMING SOON",
                h2: "We’re still fine-tuning every detail of this tour to provide you with an unforgettable experience and maximum safety.",
                h22: "Explore Available Tours",
                p: "Don’t wait! Check out our available ATV adventures in Iceland.",
                btn: "View Available Tours"
            }

        }
    }
}

transl
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") || "pl",
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false,
    },
  });

export default transl;