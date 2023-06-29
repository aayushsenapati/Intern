#include <iostream>

class MemoryAllocator {
private:
    char* memoryBlock; //pointer to a character array that represents the memory block
    bool* allocationStatus; //pointer to a boolean array that represents the allocation status of each block in the memory, 1- allocated & 0- not allocated
    int blockSize; //size of memory block

public:
    MemoryAllocator(int size) {   //constructor for MemoryAllocator
        blockSize = size; //set to size taken by constructor
        memoryBlock = new char[blockSize]; //memeory dynamically allocated 
        allocationStatus = new bool[blockSize]; //memory dynamically allocated
        std::fill_n(allocationStatus, blockSize, false); //allocation status initialized to false
        //used to fill some default values in a container
        //void fill_n(iterator begin, int n, type value);
    }

    //destructor for MemoryAllocator class
    ~MemoryAllocator() {
        delete[] memoryBlock;
        delete[] allocationStatus;
    }

    //used to allocate memory blocks of a specified size
    void* allocate(int size) {
        int startIndex = findFreeBlock(size); //finds a suitable block of free memory in the memory block
        if (startIndex == -1) {
            std::cout << "Memory allocation failed. No free block available." << std::endl;
            return nullptr;
        }

        //allocation status updated to True for blocks allocated
        for (int i = startIndex; i < startIndex + size; i++) {
            allocationStatus[i] = true;
        }

        return (void*) &memoryBlock[startIndex]; // pointer to the starting address of the allocated memory block is returned

    }

    // deallocates previously allocated memory blocks
    void deallocate(void* address, int size) {
        int startIndex = (int)((char*)address - memoryBlock); // subtracting the memory block base address from the specified address

        for (int i = startIndex; i < startIndex + size; i++) {
            allocationStatus[i] = false;
        }
    }

 //displays the allocation status of the memory blocks. 'X' -allocated blocks & '-' - free blocks
    void displayMemoryStatus() {
        std::cout << "Memory Block Status:" << std::endl;
        for (int i = 0; i < blockSize; i++) {
            std::cout << "[" << (allocationStatus[i] ? "X" : "-") << "]";
        }
        std::cout << std::endl;
    }

// used to find a sequence of consecutive free memory blocks that can accommodate the requested size.
// It returns the starting index of the free block if found; otherwise, it returns -1.
private:
    int findFreeBlock(int size) {
        int startIndex = -1;
        int consecutiveFreeBlocks = 0;

        for (int i = 0; i < blockSize; i++) {
            if (!allocationStatus[i]) {
                if (consecutiveFreeBlocks == 0) {
                    startIndex = i;
                }
                consecutiveFreeBlocks++;
            } else {
                consecutiveFreeBlocks = 0;
            }

            if (consecutiveFreeBlocks == size) {
                return startIndex;
            }
        }

        return -1;
    }
};






int main() {
    int blockSize;
    std::cout << "Enter the size of the memory block: ";
    std::cin >> blockSize;

    MemoryAllocator allocator(blockSize);

    int choice, size;
    void* address;

    do {
        std::cout << "Memory Allocator Menu:" << std::endl;
        std::cout << "1. Allocate memory" << std::endl;
        std::cout << "2. Deallocate memory" << std::endl;
        std::cout << "3. Display memory status" << std::endl;
        std::cout << "4. Exit" << std::endl;
        std::cout << "Enter your choice: ";
        std::cin >> choice;

        switch (choice) {
            case 1:
                std::cout << "Enter the size to allocate: ";
                std::cin >> size;
                address = allocator.allocate(size);
                if (address != nullptr) {
                    std::cout << "Memory allocated at address: " << address << std::endl;
                }
                break;
            case 2:
                std::cout << "Enter the address to deallocate: ";
                std::cin >> address;
                std::cout << "Enter the size to deallocate: ";
                std::cin >> size;
                allocator.deallocate(address, size);
                std::cout << "Memory deallocated." << std::endl;
                break;
            case 3:
                allocator.displayMemoryStatus();
                break;
            case 4:
                std::cout << "Exiting.";
                break;
            default:
                std::cout << "Invalid choice. Please try again." << std::endl;
        }
    } while (choice != 4);

    return 0;}