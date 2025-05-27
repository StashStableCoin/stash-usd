file(GLOB SRC_FILES *.cpp)
add_executable(stashusd ${SRC_FILES})
target_link_libraries(stashusd
    Boost::program_options
    Boost::filesystem
    Boost::date_time
    Boost::serialization
    OpenSSL::SSL
    OpenSSL::Crypto
    Threads::Threads
)
