# System Zarządzania Zadaniami Domowymi

### **Opis**

Aplikacja do zarządzania zadaniami domowymi to idealny sposób na organizacje zadań, nie tylko szkolnych! Powstała ona aby pomóc m.in. uczniom (ale nie tylko) w lepszej organizacji swojego czasu. Dzięki funkcji sortowania dokładnie widać do którego zadania najlepiej się zabrać najszybciej i co jeszcze trzeba zrobić w przyszłości.

### **Funkcjonalności**

* **Dodawanie nowych zadań** - możliwość dodania tytułu zadania, opisu i terminu do którego zadanie ma być wykonane
* **Oddzielne widoki dla różnych statusów zadań** - podstrony na zrobione zadania, zadania do zrobienia i na zadania nie zrobione w terminie, poprawia to organizacje zadań, można dokładnie zobaczyć które zadania są np. do zrobienia 
* **Odznaczanie zadań jako zrobione** - po zaznaczeniu można je zobaczyć na stronie głównej we wszystkich zadaniach lub w podstronie 'Completed Tasks'
* **Sortowanie zadań ze względu na datę** - możliwość sortowania od Najstarszej daty do Najnowszej i odwrotnie
* **Usuwanie zadań** - przy każdym zadaniu znajduje się przycisk 'Delete' co umożliwia usunięcie zadania w każdej chwili
* **Możliwość zaznaczania zrobionych zadań po terminie** - W dowolnej chwili można nacisnąć przycisk 'Done' przy zaległym zadaniu, co spowoduje jego przeniesienie do zakładki 'Completed Tasks'

### **Instrukcja uruchomienia aplikacji**

1. Zainstaluj Node.js, jeśli go jeszcze nie posiadasz lub zaktualizuj go do nowej wersji (v22 lub nowsza)
2. Zklonuj repozytorium poleceniem (w terminalu): git clone https://github.com/malwinaniedziolka/system_zarzadzania_zadaniami_domowymi
3. Otwórz aplikację w dowolnym edytorze kodu (np. Visual Studio Code)
4. Otwórz terminal i po wejściu w odpowiedni katalog w którym jest aplikacja wpisz 'npm install' - zainstaluje to potrzebne biblioteki do odpalenia aplikacji
5. Napisz w terminalu komendę 'npm start', co odpali aplikacje
6. Otwórz przeglądarkę internetową i przejdź na stronę pod adresem http://localhost:3001

### **Wykorzystane biblioteki zewnętrzne**

* **express** ^5.1.0 - framework, który ułatwia tworzenie aplikacji internetowych. Umożliwia obsługę tras, middleware oraz zarządzanie żądaniami i odpowiedziami HTTP.
* **nodemon** ^3.1.10 - automatycznie restartuje aplikację po wykryciu zmian w kodzie. Przydatne podczas pracy nad aplikacją, eliminuje ręczne restartowanie serwera. 
* **ejs** ^3.1.10 - pozwala na dynamiczne generowanie HTML, wstawiając dane, które są przekazywane do szablonów z backendu. Pozwala na oddzielenie logiki biznesowej od warstwy prezentacji.
* **body-parser** ^2.2.0 - umożliwia parsowanie ciała żądania http, np. danych przesyłanych w formularzach lub jako JSON.

### **Struktura aplikacji**

* **Constants** - zawiera status cody i elementy nawigacji.
* **Controllers** - zawiera kontrolery, które zarządzają interakcją między widokiem a modelem. homeController.js zajmuje się renderowaniem głównej strony ze wszystkimi zadaniami, a tasksController.js zawiera renderowanie podstron 'Add Task', 'Upcoming Tasks', 'Completed Tasks' i 'Past due Tasks' oraz używa modelu do robienia takich rzeczy jak dodanie lub usuwanie zadania i za zaznaczanie zadania jako wykonane
* **Models** - zawiera modele, które są odpowiedzialne za dane i logikę biznesową. TasksModel odpowiada za operacje na zadanich np. przechowywanie ich, dodawanie nowych, usuwanie, i sortowanie
* **Public** - zawiera folder css w którym jest plik który styluję aplikację dla lepszego doświadczenia użytkownika
* **Utils** - zawiera logger do logowania czynności użytkownika i getFileFromAbsolutePath do łatwiejszego używania ścieżek w kodzie
* **Views** - zawiera widoki, które odpowiadają za interfejs użytkownika, i folder Partials, w którym znajdują się mniejsze fragmenty szablonów, które mogą być wielokrotnie używane w różnych miejscach. 
W partials są takie pliki jak:  navigation.ejs, który zajmuje się nawigacją i sorting.ejs, który ma fragment z przyciskami do sortowania zadań.
Natomiast w widokach jest: 404.ejs odpowiedzialny za stronę not found, add-task.ejs odpowiedzialny za podstronę do dodawania zadań, completed-tasks.ejs odpowiedzialny za podstronę ze zrobionymi zadaniami, home.ejs odpowiedzialny za stronę główną aplikacji ze wszystkimi zadaniami, past-due-tasks.ejs odpowiedzialny za podstronę z zadaniami niezrobionymi na czas oraz upcoming-tasks.ejs odpowiedzialny za podstronę z zadaniami do zrobienia.
* **Routing** - tasks.js zajmuję się routingiem w całej aplikacji.

### **Przykładowe dane wejściowe** przy dodawaniu zadania

* **Title** – tytuł zadania (wymagane) np. Matematyka
* **Description** – szczegóły zadania, opis (opcjonalne) np. nauczyć się na sprawdzian
* **Deadline** – data wykonania (wymagane) 
