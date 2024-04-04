CC = g++ -std=c++11
CFLAGS = 
INCLUDES = 
LFLAGS = 
LIBS = 

# Common source files shared by all executables
COMMON_SRCS = ./src/CommentRemoval/fileAsArray.cpp ./src/Token/Tokenizer.cpp ./src/Token/Token.cpp ./src/CST/ConcreteSyntaxTree.cpp ./src/CST/Node.cpp ./src/CST/Parser.cpp ./src/OutputCST/OutPutGenerator.cpp ./src/SymbolTable/SymbolTablesLinkedList.cpp

# Object files derived from COMMON_SRCS
COMMON_OBJS = $(COMMON_SRCS:.cpp=.o)

# Executable names
EXECUTABLES = main tokens cst symbolTable

all: $(EXECUTABLES)

main: $(COMMON_OBJS) ./src/main.o
	$(CC) $(CFLAGS) $(INCLUDES) -o $@ $^ $(LFLAGS) $(LIBS)

tokens: $(COMMON_OBJS) ./src/mainTokens.o
	$(CC) $(CFLAGS) $(INCLUDES) -o $@ $^ $(LFLAGS) $(LIBS)

cst: $(COMMON_OBJS) ./src/mainCST.o
	$(CC) $(CFLAGS) $(INCLUDES) -o $@ $^ $(LFLAGS) $(LIBS)

symbolTable: $(COMMON_OBJS) ./src/mainSymbolTable.o
	$(CC) $(CFLAGS) $(INCLUDES) -o $@ $^ $(LFLAGS) $(LIBS)

# This is a pattern rule for building .o files from .cpp files
%.o: %.cpp
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

clean:
	$(RM) *.o *~ $(EXECUTABLES)

.PHONY: all clean
