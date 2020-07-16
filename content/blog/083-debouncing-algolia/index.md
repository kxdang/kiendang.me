---
author: Kien
date: 2020-04-29
slug: algolia-debouncing
title: ❔How to debounce Algolia's Search
description:  How I debounced my Algolia's ReactInstantSearch to reduce the number of operations being called to Algolia. Also, what is debouncing in JavaScript?
tags: ["webdev", "react", "javascript"]
---
Now that I have Algolia's search feature installed, I have been enjoying their instantly fast searches on my blog. In Algolia’s InstantSearch, each keystroke fires a function to query for a search.

However, this type of effect can be costly to performance. In addition, I also want to stay within their free monthly queries per second threshold and since each keystroke counts as one query, the operations quickly add up.

Luckily, there’s a solution! I’m thankful to be surrounded by great friends who are experienced programmers, giving me the ability to learn, grow and evolve in my programming journey. 

They guided me into looking at something called debouncing and I successfully implemented a debouncing feature for my Algolia search results to improve performance and limit the number of search requests.

## <center> What exactly is JavaScript debouncing? </center>

A technique to improve browser performance by reducing the number of times a function is called.

### <center> Why is it important? </center>
It is important because when you have multiple function calls that happen frequently, it will greatly affect the performance of the browser. 

JavaScript is a single threaded language and since the browser can only make so many requests, you’ll run into congestion with function calls.
Therefore, implementing debouncing is important. For my case, it helps me throttle my queries per second as I have it set up to fire after a certain interval.


### <center> How I installed it on my blog </center>

I followed their documentation <a href="https://www.algolia.com/doc/guides/building-search-ui/going-further/improve-performance/react/#debouncing" target="_blank">here</a>.

I created a DebouncingSearchBox component by utilizing their connectSearchBox connector which is a higher-order component that allows you to encapsulate the logic for their widgets.

```JavaScript
//in src/util/DebouncedSearchBox.js
import React, { Component } from 'react';

export default class SearchBox extends Component {
	timerId = null;

	state = {
			value: this.props.currentRefinement
	};

	onChangeDebounced = event => {
			const { refine, delay } = this.props;
			const value = event.currentTarget.value;

			clearTimeout(this.timerId);
			this.timerId = setTimeout(() => refine(value), delay);

			this.setState(() => ({
					value
			}));
	};

	render() {
	const { value } = this.state;
		return (
			<div className="ais-SearchBox">
				<form className="ais-SearchBox-form" role="search">
					<input
						type="text"
						className="ais-SearchBox-input"
						value={value}
						onChange={this.onChangeDebounced}
						placeholder="Search here..."
					/>
				</form>
			</div >
	);
	}
}

```

Inside this component I added back the original styles that the regular SearchBox had because I am currently overriding the CSS manually.

Next, I imported where I wanted the new search box and deleted the SearchBox from the react-instantsearch-dom since I won’t be using it anymore. Then I passed in a delay prop of 400 milliseconds and viola! A debounced version of Aloglia’s search.

```JSX
import SearchBox from '../utils/DebouncedSearchBox'

import {
InstantSearch,
connectSearchBox
} from "react-instantsearch-dom

const DebouncedSearchBox = connectSearchBox(SearchBox);

const Hit = ({ hit }) => <SearchPreview hit={hit} />

return (
	<Layout location={this.props.location} title={siteTitle}>
		<SEO title="A blog by Kien" />
		<Bio />


		<InstantSearch searchClient={searchClient} indexName="Blog">
			<DebouncedSearchBox delay={400} />
			//<SearchBox> Removed
			<Results>
				<Hits hitComponent={Hit} />
			</Results>
		</InstantSearch>
		...
	</Layout>
```
As a bonus, I went ahead and found out exactly how debouncing implemented in JavaScript, this is what a debouncing function looks like:

```JavaScript
function debounce(fn, time) {
	let setTimeoutId;

	return function() {
		if(setTimeoutId){ 
			clearTimeout(setTimeoutId)
		}
			
		setTimeoutId = setTimeout(() => {
				fn.apply(this, arguments)
				setTimeoutId = null
		}, time)
	}
}
```








