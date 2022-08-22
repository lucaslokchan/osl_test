# osl_test

Technical test for OSL (Chatbot)

## Design

### Chatbot

The chatbot conversation window is created with react-simple-chatbot. For nickname input, only alphanumeric, underscores, and dashes are allowed (using regex). Users can select from 7 different types of questions. The character limit for question input is 200. The database stores country codes in accordance with ISO 3166-1 alpha-3:

China: CHN

Singapore: SGP

United Kingdom: GBR

United States: USA

The mongoDB Atlas database receives user responses (nickname, location, question category, and question details).

### Dashboard

#### Geographic location population

Mongodb has built-in graph-building tools for visualizing population distribution by location. The graph is then embedded into the dashboard page.

#### Question Category Distribution

The Treemap component in react-viz is used for question category distribution based on the count of each question category after querying MongoDB.

#### List of all questions

When you change the options in the "Filter Category" and "Filter Country" drop down menus, the values are passed into pages/api/[...params].js. The dynamic API is then passed to MongoDB to query results based on question category and country, thus filtering the results.

## Tech Stack

### Programming Language

Javascript

### Frontend

Next.js - Web development framework

Tailwindcss - CSS

react-simple-chatbot - Chatbot conversation window

react-viz - Treemap Data Visualization

### Backend

Mongodb - Database

## Links

Chatbot Page

https://osl-chatbot.vercel.app/

Dashboard Page

https://osl-chatbot.vercel.app/dashboard
