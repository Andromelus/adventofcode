frequencies = Hash.new


def calculate_frequency(freq, found, frequencies)
  File.open("input.dat", "r") do |f|
      f.each_line do |line|
        freq += line.to_i
        if store_frequency(freq, frequencies) == 2
          found = true
        end          
      end
  end
  if found == true
    puts freq
    return freq
  else
    return calculate_frequency(freq, found, frequencies)
  end
end


def store_frequency(freq, frequencies)
  if frequencies[freq.to_s] == nil
    frequencies[freq.to_s] = 1
  else
    frequencies[freq.to_s] += 1
  end
  return frequencies[freq.to_s]
end


calculate_frequency(0, false, frequencies)






