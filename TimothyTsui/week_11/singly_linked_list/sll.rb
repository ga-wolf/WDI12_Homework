# bros = SinglyLinkedList.new
# bros.append('Groucho')
# bros.append('Harpo')

class SinglyLinkedList
  attr_reader :head

  def initialize(start_value=nil)
    @head = Node.new(start_value) unless start_value.nil?
  end

  def first
    @head
  end

  def last
    last_node = @head
    while last_node && last_node.next
      last_node = last_node.next
    end
    last_node
  end

  def append(value)
    node = Node.new value
    last_node = self.last
    if last_node.nil?
      @head = node
    else
      last_node.next = node
    end
  end

  def prepend(value)
    newHead = Node.new value
    first_node = self.first
    if first_node.nil?
      @head = newHead
    else
      newHead.next = @head
      @head = newHead
    end
  end

  def length # Also #count and #size (Ruby has a nice way to alias things)
    cur_node = self.head
    len = 0
    while cur_node
      len += 1
      cur_node = cur_node.next
    end
    len
  end
  alias_method :size, :length
  alias_method :count, :length

  # returns the node containing the needle as its value
  def find(needle)
    cur_node = @head
    while cur_node
      return cur_node if cur_node.value == needle
      cur_node = cur_node.next
    end
    nil
  end

  # returns a new SLL with the nodes in reverse order
  def reverse
    reversed = SinglyLinkedList.new
    node = @head
    while node
      reversed.prepend node.value
      node = node.next
    end
    reversed
  end

  # in-place reverse. O(n) running time
  def reverse!
    return self if self.length == 1
    prev = nil
    while cur = @head
      @head = cur.next
      cur.next = prev
      prev = cur
    end
    @head = prev
    self
  end

  def each
    # your tricky code here. Takes a block that does something. Hint: yield
    node = @head
    while node
      yield node
      node = node.next
    end
  end

  def map
    # this is trivial once #each is working
    map = SinglyLinkedList.new
    node = @head
    while node
      res = yield node
      map.append res
      node = node.next
    end
    map
  end

  class Node
    attr_accessor :value, :next
    def initialize(value=nil)
      @value = value
      @next = nil
    end
  end

end


# require 'pry'
# binding.pry