frequencies = Hash.new


def calculate_frequency(freq, found, frequencies)
  File.open("input.dat", "r") do |f|
      f.each_line do |line|
        freq += line.to_i
        if store_frequency(freq, frequencies) == 2
          return freq
        end          
      end
  end
    return calculate_frequency(freq, found, frequencies)
end


def store_frequency(freq, frequencies)
  if frequencies[freq.to_s] == nil
    frequencies[freq.to_s] = 1
  else
    frequencies[freq.to_s] += 1
  end
  return frequencies[freq.to_s]
end

duplicate_freq = calculate_frequency(0, false, frequencies)
puts "The first duplicate frequency is #{duplicate_freq}"






