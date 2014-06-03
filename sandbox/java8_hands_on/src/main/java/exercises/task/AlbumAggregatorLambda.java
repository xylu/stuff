package exercises.task;

import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class AlbumAggregatorLambda {


    public Collection<Album> aggregate(Collection<Album> albums) {
        List<Album> collected = albums
                .stream()
                .filter(a -> a.tracks.stream().filter(t -> t.rating >= 4).count() > 0)
                .sorted((a1, a2) -> a1.name.compareTo(a2.name))
                .collect(Collectors.toList());

        return collected;

    }

    public Collection<Album> aggregateMoreLambda(Collection<Album> albums) {
        return albums
                .stream()
                .filter(a -> a.tracks.stream().anyMatch(t -> t.rating >= 4))
                .sorted(Comparator.comparing( a -> a.name))
                .collect(Collectors.<Album>toList());

    }
}
