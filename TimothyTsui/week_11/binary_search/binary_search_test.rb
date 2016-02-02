require_relative 'binary_search'
require 'minitest/autorun'
require 'minitest/pride'

class TestBinarySearch < Minitest::Test
  def test_search_mid
    # skip
    assert_equal 1, binarySearch((1..3).to_a, 2)
  end

  def test_search_low
    # skip
    assert_equal 0, binarySearch((1..3).to_a, 1)
  end

  def test_search_hi
    # skip
    assert_equal 2, binarySearch((1..3).to_a, 3)
  end

  def test_search_5_elements
    # skip
    assert_equal 2, binarySearch((1..5).to_a, 3)
  end

  def test_search_5_elements2
    # skip
    assert_equal 0, binarySearch((1..5).to_a, 1)
  end

  def test_search_5_elements3
    # skip
    assert_equal 1, binarySearch((1..5).to_a, 2)
  end

  def test_search_5_elements4
    # skip
    assert_equal 3, binarySearch((1..5).to_a, 4)
  end

  def test_search_5_elements5
    # skip
    assert_equal 4, binarySearch((1..5).to_a, 5)
  end

  def test_search_4_elements
    # skip
    assert_equal 2, binarySearch((1..4).to_a, 3)
  end

  def test_search_4_elements2
    # skip
    assert_equal 0, binarySearch((1..4).to_a, 1)
  end

  def test_search_4_elements3
    # skip
    assert_equal 1, binarySearch((1..4).to_a, 2)
  end

  def test_search_4_elements4
    # skip
    assert_equal 3, binarySearch((1..4).to_a, 4)
  end

  def test_search_2_elements
    # skip
    assert_equal 0, binarySearch((1..2).to_a, 1)
  end

  def test_search_2_elements2
    # skip
    assert_equal 1, binarySearch((1..2).to_a, 2)
  end

  def test_search_nonexistent_num
    # skip
    assert_equal -1, binarySearch((1..3).to_a, 4)
  end

  def test_search_nonexistent_num2
    # skip
    assert_equal -1, binarySearch((1..3).to_a, 0)
  end

  def test_search_not_contiguous
    # skip
    assert_equal -1, binarySearch([1,3,5,7], 4)
  end
end
