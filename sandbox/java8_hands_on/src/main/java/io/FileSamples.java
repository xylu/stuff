package io;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class FileSamples {


    public static void main(String[] args) throws IOException {

        listCurrentDirectory();

        walkRecursivelyAndSkipHidden();

        String fileToPrint = "pom.xml";
        System.out.printf("\n\nPrinting out content of '%s' : \n\n", fileToPrint);
        Files.lines(new File(fileToPrint).toPath())
                .map(String::trim)
                .filter(l -> !l.isEmpty())
                .forEach(System.out::println);
    }

    private static void listCurrentDirectory() throws IOException {
        Files.list(new File(".").toPath())
                .forEach(System.out::println);
    }

    private static void walkRecursivelyAndSkipHidden() throws IOException {
        Files.walk(new File(".").toPath())
                .filter(p -> !p.toString()
                        .contains(File.separator + "."))
                .forEach(System.out::println);
    }


}
