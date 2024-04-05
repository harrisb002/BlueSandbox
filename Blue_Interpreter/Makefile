CC = g++ -std=c++11

CFLAGS = 

INCLUDES = 

LFLAGS = 

LIBS = 

# Common source files needed by all mains, excluding the main.cpp files themselves
COMMON_SRCS = ./src/CommentRemoval/fileAsArray.cpp ./src/Token/Tokenizer.cpp ./src/Token/Token.cpp ./src/CST/ConcreteSyntaxTree.cpp ./src/CST/Node.cpp ./src/CST/Parser.cpp ./src/OutputCST/OutPutGenerator.cpp ./src/SymbolTable/SymbolTablesLinkedList.cpp

# Object files for the common source files
COMMON_OBJS = $(COMMON_SRCS:.c=.o)

# Define the executable file names
EXECUTABLES = main mainCST mainTokens mainSymbolTable

.PHONY: all depend clean

all: $(EXECUTABLES)

main: ./src/main.cpp $(COMMON_OBJS)
	$(CC) $(CFLAGS) $(INCLUDES) -o $@ $^ $(LFLAGS) $(LIBS)

mainCST: ./src/mainCST.cpp $(COMMON_OBJS)
	$(CC) $(CFLAGS) $(INCLUDES) -o $@ $^ $(LFLAGS) $(LIBS)

mainTokens: ./src/mainTokens.cpp $(COMMON_OBJS)
	$(CC) $(CFLAGS) $(INCLUDES) -o $@ $^ $(LFLAGS) $(LIBS)

mainSymbolTable: ./src/mainSymbolTable.cpp $(COMMON_OBJS)
	$(CC) $(CFLAGS) $(INCLUDES) -o $@ $^ $(LFLAGS) $(LIBS)

# This is a suffix replacement rule for building .o's from .cpp's
.cpp.o:
	$(CC) $(CFLAGS) $(INCLUDES) -c $<  -o $@

clean:
	$(RM) *.o *~ $(EXECUTABLES)

depend: $(COMMON_SRCS) ./src/main.cpp ./src/mainCST.cpp ./src/mainTokens.cpp ./src/mainSymbolTable.cpp
	makedepend $(INCLUDES) $^

# DO NOT DELETE THIS LINE -- make depend needs it
