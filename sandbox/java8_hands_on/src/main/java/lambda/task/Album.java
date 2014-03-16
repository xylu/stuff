package lambda.task;

import java.util.Collection;

public class Album {

    String name;
    Collection<Track> tracks;

    public Album(String name, Collection<Track> tracks) {
        this.name = name;
        this.tracks = tracks;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<Track> getTracks() {
        return tracks;
    }

    public void setTracks(Collection<Track> tracks) {
        this.tracks = tracks;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Album album = (Album) o;

        if (name != null ? !name.equals(album.name) : album.name != null) return false;
        if (tracks != null ? !tracks.equals(album.tracks) : album.tracks != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + (tracks != null ? tracks.hashCode() : 0);
        return result;
    }

    @Override public String toString() {
        return "Album{" +
                "name='" + name + '\'' +
                ", tracks=" + tracks +
                '}';
    }
}
