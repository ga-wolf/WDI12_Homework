require_relative '../sll'

describe SinglyLinkedList do
  let(:list) { list = SinglyLinkedList.new "1st node" }


  describe 'Node.new' do
    it 'should create a new node' do
      list = SinglyLinkedList.new 'head'
      expect(list.head.value).to eq('head')
      expect(list.head.next).to be_nil
    end
  end

  describe '.new' do
    it 'creates a list with no start value' do
      list = SinglyLinkedList.new
      expect(list).to be
      expect(list.head).to be_nil
    end

    it 'creates a list with a start value' do
      list = SinglyLinkedList.new "1st node"
      expect(list).to be
      expect(list.head).to_not be_nil
    end
  end

  describe '#first' do
    it 'returns the head node' do
      expect(list.first).to eq(list.head)
    end
  end

  describe '#append' do
    it 'adds a node to the end of the list' do
      list.append('2nd node')
      expect(list.head.value).to eq('1st node')
      expect(list.head.next.value).to eq('2nd node');
    end
  end

  describe '#last' do
    it 'returns the last node' do
      list.append('2nd node')
      expect(list.last.value).to eq('2nd node')
    end
  end

  describe '#length' do
    it 'returns length 1' do
      expect(list.length).to eq(1)
    end

    it 'returns length 2' do
      list.append('2nd node')
      expect(list.length).to eq(2)
    end
  end

  describe '#size' do
    it 'returns size 1' do
      expect(list.size).to eq(1)
    end

    it 'returns size 2' do
      list.append('2nd node')
      expect(list.size).to eq(2)
    end
  end

  describe '#count' do
    it 'returns count 1' do
      expect(list.count).to eq(1)
    end

    it 'returns count 2' do
      list.append('2nd node')
      expect(list.count).to eq(2)
    end
  end

  describe '#prepend' do
    it 'creates a new head node from a 1 node list' do
      node2 = list.head
      list.prepend('new head')
      expect(list.head.value).to eq('new head')
      expect(list.head.next).to be(node2)
    end

    it 'creates a new head node from a 0 node list' do
      list = SinglyLinkedList.new
      list.prepend('new head')
      expect(list.head.value).to eq('new head')
      expect(list.head.next).to be_nil
    end
  end

  describe '#find' do
    it 'searches for the first node' do
      node1 = list.find '1st node'
      expect(node1.value).to eq('1st node')
    end

    it 'searches for a nonexistent node' do
      node = list.find 'nosuchnode'
      expect(node).to be_nil
    end

    it 'searches for the second node' do
      node2 = list.append('2nd node')
      nodeFound = list.find '2nd node'
      expect(node2).to be(nodeFound)
    end
  end

  describe '#reverse' do
    it 'reverses a single node list' do
      reversed = list.reverse
      # why does this fail?
      expect(reversed.head).to eq(list.head)
      # expect(reversed.head.value).to eq(list.head.value)
    end

    it 'reverses a list with 2 nodes' do
      list.append('2nd node')
      reversed = list.reverse
      expect(reversed.head.value).to eq('2nd node')
      expect(reversed.head.next.value).to eq('1st node')
    end
  end

  describe '#reverse!' do
    it 'returns single node list' do
      reversed = list.reverse!
      expect(reversed).to be(list)
    end

    it 'reverses and replaces a list with 2 nodes' do
      list.append '2nd node'
      list.reverse!
      expect(list.head.value).to eq('2nd node')
      expect(list.head.next.value).to eq('1st node')
    end

    it 'reverses and replaces a list with 3 nodes' do
      list.append '2nd node'
      list.append '3rd node'
      list.reverse!
      expect(list.head.value).to eq('3rd node')
      expect(list.head.next.value).to eq('2nd node')
      expect(list.head.next.next.value).to eq('1st node')
    end
  end

  describe '#each' do
    it 'prints a 3 node list' do
      list.append '2nd node'
      list.append '3rd node'
      list.each do |node|
        expect( print(node.value) ).to output('1st node').to_stdout
      end

    end
  end

  describe '#map' do
    it 'adds "yay" to the value of each node in the list' do
      list.append '2nd node'
      list.append '3rd node'
      map = list.map {|node| "#{ node.value } yay" }
      puts "#{ map.head.value } #{ map.head.next.value} #{ map.head.next.next.value }"
    end
  end
end