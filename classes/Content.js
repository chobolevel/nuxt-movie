export class Content {
  constructor(content) {
    this.id = content.id
    this.posterPath = content.poster_path
    this.title = content.title
    this.overview = content.overview
    this.releaseDate = content.release_date
    this.adult = content.adult
    this.voteAverage = content.vote_average
  }
}
