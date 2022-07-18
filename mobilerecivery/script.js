// Book Class: Represents a mobile type
class Book {
    constructor(mobileBrand, Model, IMEI) {
      this.mobileBrand = mobileBrand;
      this.Model = Model;
      this.IMEI = IMEI;
    }
  }
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('#book-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${book.mobileBrand}</td>
        <td>${book.Model}</td>
        <td>${book.IMEI}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteBook(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      container.insertBefore(div, form);
  
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 8000);
    }
  
    static clearFields() {
      document.querySelector('#mobileBrand').value = '';
      document.querySelector('#Model').value = '';
      document.querySelector('#IMEI').value = '';
    }
  }
  
  // Store Class: Handles Storage
  class Store {
    static getBooks() {
      let mobile;
      if(localStorage.getItem('mobile') === null) {
        mobile = [];
      } else {
        mobile = JSON.parse(localStorage.getItem('mobile'));
      }
  
      return mobile;
    }
  
    static addBook(book) {
      const mobile = Store.getBooks();
      mobile.push(book);
      localStorage.setItem('mobile', JSON.stringify(mobile));
    }
  
    static removeBook(IMEI) {
      const mobile = Store.getBooks();
  
      mobile.forEach((book, index) => {
        if(book.IMEI === IMEI) {
          mobile.splice(index, 1);
        }
      });
  
      localStorage.setItem('mobile', JSON.stringify(mobile));
    }
  }
  
  // Event: Display mobile
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  
  // Event: Add a mobile
  document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    const mobileBrand = document.querySelector('#mobileBrand').value;
    const Model = document.querySelector('#Model').value;
    const IMEI = document.querySelector('#IMEI').value;
  
    // Validate
    if(mobileBrand === '' || Model === '' || IMEI === '') {
      UI.showAlert('Please fill in all fields', 'warning');
    } else {
      // Instatiate book
      const book = new Book(mobileBrand, Model, IMEI);
  
      // Add mobile to UI
      UI.addBookToList(book);
  
      // Add mobile to store
      Store.addBook(book);
  
      // Show success message
      UI.showAlert('Your mobile will be tracked soon', 'success');
  
      // Clear fields
      UI.clearFields();
    }
  });
  
  // Event: Remove a Book
  document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove mobile from UI
    UI.deleteBook(e.target);
  
    // Remove mobile from store
    Store.removeMobile(e.target.parentElement.previousElementSibling.textContent);
  
    // Show success message
    UI.showAlert('Mobile Removed', 'success');
  });