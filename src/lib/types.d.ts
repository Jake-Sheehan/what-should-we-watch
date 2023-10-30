export interface MovieList {
	page: number;
	results: MovieListResult[];
	total_pages: number;
	total_results: number;
}

export interface GenreList {
	genres: Genre[];
}

interface Image {
	aspect_ratio: number;
	file_path: string;
	height: number;
	iso_639_1: string | null;
	vote_average: number;
	vote_count: number;
	width: number;
}

interface ProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

interface Language {
	english_name: string;
	iso_639_1: string;
	name: string;
}

interface Images {
	backdrops: Image[];
	logos: Image[];
	posters: Image[];
}

interface Genre {
	id: number;
	name: string;
}

// type for movies/popular and the like
export interface MovieListResult {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

// tytpe for movies/{id}
export interface MovieDetails {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: boolean | null;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	images: Images;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: Language[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: boolean;
}
