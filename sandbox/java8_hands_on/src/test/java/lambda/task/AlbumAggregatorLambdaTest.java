package lambda.task;

import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;


public class AlbumAggregatorLambdaTest {

    private final ArrayList<Album> albums = new ArrayList<>();

    @Before
    public void setUp() throws Exception {

        albums.add(new Album("A", Arrays.asList(new Track("A1", 6))));
        albums.add(new Album("B", Arrays.asList(new Track("A1", 1))));
        albums.add(new Album("D", Arrays.asList(new Track("A1", 4))));
        albums.add(new Album("C", Arrays.asList(new Track("A1", 6))));

    }

    @Test
    public void shouldAggregateAsNonLambdaVersion() throws Exception {
        //given
        Collection<Album> aggregateByLoops = new AlbumAggregatorExternalLooping().aggregate(albums);
        //then
        Collection<Album> aggregateByLambda = new AlbumAggregatorLambda().aggregate(albums);
        // /assert
        Assert.assertThat(aggregateByLambda, CoreMatchers.equalTo(aggregateByLoops));

    }


    @Test
    public void shouldMoreLambdaAggregateAsNonLambdaVersion() throws Exception {
        //given
        Collection<Album> aggregateByLoops = new AlbumAggregatorLambda().aggregate(albums);
        //then
        Collection<Album> aggregateByLambda = new AlbumAggregatorLambda().aggregateMoreLambda(albums);
        // /assert
        Assert.assertThat(aggregateByLambda, CoreMatchers.equalTo(aggregateByLoops));

    }
}
