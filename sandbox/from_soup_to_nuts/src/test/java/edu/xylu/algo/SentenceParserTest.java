package edu.xylu.algo;

import org.hamcrest.CoreMatchers;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.assertThat;

public class SentenceParserTest {

    private SentenceParser parser = new SentenceParser();

    @Test
    public void shouldParseSimpleInput() throws Exception {
        //given
        String input = "Ala ma kota";
        //when

        List<String> sentences = parser.parse(input);
        //then
        assertThat(sentences, CoreMatchers.hasItems("Ala ma kota"));
        assertThat(sentences.size(), CoreMatchers.equalTo(1));

    }
}
