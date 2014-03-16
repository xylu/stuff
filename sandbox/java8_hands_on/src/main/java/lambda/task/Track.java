package lambda.task;

public class Track {
    String name;
    int rating;

    public Track(String name, int rating) {
        this.name = name;
        this.rating = rating;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Track track = (Track) o;

        if (rating != track.rating) return false;
        if (name != null ? !name.equals(track.name) : track.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + rating;
        return result;
    }

    @Override public String toString() {
        return "Track{" +
                "name='" + name + '\'' +
                ", rating=" + rating +
                '}';
    }
}
