#include <iostream>
#include <vector>

class MemoryManager {
private:
    std::vector<char> memoryBlock;
    std::vector<bool> allocationStatus;
    int blockSize;

public:
    MemoryManager(int size) {
        blockSize = size;
        memoryBlock.resize(blockSize);
        allocationStatus.resize(blockSize, false);
    }

    ~MemoryManager() {}

    const char* getMemoryBlock() const {
        return memoryBlock.data();
    }


    void compactMemory() {
        int shiftCount = 0; // Number of blocks to shift
        for (int i = 0; i < blockSize; i++) {
            if (!allocationStatus[i]) shiftCount++;
            if(allocationStatus[i] && shiftCount)){
                allocationStatus[i-shiftCount] = true;
                allocationStatus[i] = false;
            }
        }
    }
    void* allocate(int size) {
        int startIndex = findFreeBlock(size);
        if (startIndex == -1) {
            compactMemory()
            startIndex = findFreeBlock(size);
            if (startIndex == -1) {
                std::cout << "Memory allocation failed. No free block available." << std::endl;
                return nullptr;
            }
        }

        for (int i = startIndex; i < startIndex + size; i++) {
            allocationStatus[i] = true;
        }

        return reinterpret_cast<void*>(&memoryBlock[startIndex]);
    }

    

    void deallocate(void* address, int size) {
        char* startAddress = memoryBlock.data();
        char* endAddress = startAddress + blockSize;

        char* deallocationAddress = static_cast<char*>(address);

        if (deallocationAddress < startAddress || deallocationAddress >= endAddress) {
            std::cout << "Invalid address. Please enter a valid address within the allocated memory range." << std::endl;
            return;
        }

        int startIndex = deallocationAddress - startAddress;

        for (int i = startIndex; i < startIndex + size; i++) {
            allocationStatus[i] = false;
        }

        std::cout << "Memory deallocated." << std::endl;
    }


    void displayMemoryStatus() {
        std::cout << "Memory Block Status:" << std::endl;
        for (int i = 0; i < blockSize; i++) {
            std::cout << "[" << (allocationStatus[i] ? "X" : "-") << "]";
        }
        std::cout << std::endl;
    }

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
        for (int i=0;i<blockSize;i++)
        {
            
        }

        return -1;
    }
};




int main() {
    int blockSize;
    std::cout << "Enter the size of the memory block: ";
    std::cin >> blockSize;

    MemoryManager memoryManager(blockSize);

    int choice, size;
    void* address;

    do {
        std::cout << "Memory Manager Menu:" << std::endl;
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
                address = memoryManager.allocate(size);
                if (address != nullptr) {
                    std::cout << "Memory allocated at address: " << address << std::endl;
                }
                break;
            case 2:
                std::cout << "Enter the address to deallocate: ";
                std::cin >> address;

                std::cout << "Enter the size to deallocate: ";
                std::cin >> size;

                memoryManager.deallocate(address, size);
                std::cout << "Memory deallocated." << std::endl;
                break;
            case 3:
                memoryManager.displayMemoryStatus();
                break;
            case 4:
                std::cout << "Exiting." << std::endl;
                break;
            default:
                std::cout << "Invalid choice. Please try again." << std::endl;
        }
    } while (choice != 4);

    return 0;
}       