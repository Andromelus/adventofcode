currentFrequency = 0

  File.open("input.dat", "r") do |f|
      f.each_line do |line|
        currentFrequency = currentFrequency + line.to_i
      end
  end
    puts "The frequency is #{currentFrequency}"







