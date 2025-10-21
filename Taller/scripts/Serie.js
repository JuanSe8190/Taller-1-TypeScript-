var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, link, imageUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.imageUrl = imageUrl;
    }
    Serie.promedioSeasons = function (series) {
        if (series.length === 0)
            return 0;
        var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
        return totalSeasons / series.length;
    };
    return Serie;
}());
export { Serie };
